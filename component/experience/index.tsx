import { Badge, Col, Row } from 'reactstrap';
import { DateTime, Duration } from 'luxon';

import { PropsWithChildren } from 'react';
import { EmptyRowCol } from '../common';
import ExperienceRow from './row';
import { IExperience } from './IExperience';
import { PreProcessingComponent } from '../common/PreProcessingComponent';
import { Style } from '../common/Style';
import Util from '../common/Util';

type Payload = IExperience.Payload;

export const Experience = {
  Component: ({ payload }: PropsWithChildren<{ payload: Payload }>) => {
    return PreProcessingComponent<Payload>({
      payload,
      component: Component,
    });
  },
};

function Component({ payload }: PropsWithChildren<{ payload: Payload }>) {
  const totalPeriod = () => {
    if (payload.disableTotalPeriod) {
      return '';
    }
    return (
      <span style={{ fontSize: '50%' }}>
        <Badge>{getFormattingExperienceTotalDuration(payload)}</Badge>
      </span>
    );
  };

  return (
    <div className="mt-5">
      <EmptyRowCol>
        <Row className="pb-3">
          <Col>
            <h2 style={Style.blue}>EXPERIENCE {totalPeriod()}</h2>
          </Col>
        </Row>
        {payload.list.map((item, index) => (
          <ExperienceRow key={`${item.title}`} item={item} index={index} />
        ))}
      </EmptyRowCol>
    </div>
  );
}

export function getFormattingExperienceTotalDuration(payload: IExperience.Payload) {
  // 모든 position의 시작/종료 날짜를 수집
  const periods: { start: DateTime; end: DateTime }[] = [];
  
  payload.list.forEach((item: IExperience.Item) => {
    item.positions.forEach((position: IExperience.Position) => {
      const startedAt = DateTime.fromFormat(position.startedAt, Util.LUXON_DATE_FORMAT.YYYY_LL);
      const endedAt = position.endedAt
        ? DateTime.fromFormat(position.endedAt, Util.LUXON_DATE_FORMAT.YYYY_LL)
        : DateTime.local();
      periods.push({ start: startedAt, end: endedAt });
    });
  });

  // 시작일 기준으로 정렬
  periods.sort((a, b) => a.start.toMillis() - b.start.toMillis());

  // 겹치는 기간 병합
  const mergedPeriods: { start: DateTime; end: DateTime }[] = [];
  
  periods.forEach((period) => {
    if (mergedPeriods.length === 0) {
      mergedPeriods.push(period);
    } else {
      const lastMerged = mergedPeriods[mergedPeriods.length - 1];
      
      // 현재 기간이 마지막 병합된 기간과 겹치거나 인접한 경우
      if (period.start <= lastMerged.end) {
        // 종료일을 더 늦은 날짜로 확장
        lastMerged.end = period.end > lastMerged.end ? period.end : lastMerged.end;
      } else {
        // 겹치지 않는 새로운 기간
        mergedPeriods.push(period);
      }
    }
  });

  // 병합된 기간들의 duration 합산
  const totalExperience = mergedPeriods.reduce((total: Duration, period) => {
    const duration = period.end.diff(period.start);
    return total.plus(duration);
  }, Duration.fromMillis(0));

  return totalExperience.toFormat(`총 ${Util.LUXON_DATE_FORMAT.DURATION_KINDNESS}`);
}
