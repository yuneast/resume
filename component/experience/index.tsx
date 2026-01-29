import { Badge, Col, Row } from 'reactstrap';
import { DateTime } from 'luxon';

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
  let minStart: DateTime | null = null;
  let maxEnd: DateTime | null = null;

  payload.list.forEach((item: IExperience.Item) => {
    item.positions.forEach((position: IExperience.Position) => {
      const startedAt = DateTime.fromFormat(position.startedAt, Util.LUXON_DATE_FORMAT.YYYY_LL);
      const endedAt = position.endedAt
        ? DateTime.fromFormat(position.endedAt, Util.LUXON_DATE_FORMAT.YYYY_LL)
        : DateTime.local();

      if (!minStart || startedAt < minStart) minStart = startedAt;
      if (!maxEnd || endedAt > maxEnd) maxEnd = endedAt;
    });
  });

  if (!minStart || !maxEnd) return '';

  return `총 ${Util.getFormattingDuration(minStart, maxEnd)}`;
}
