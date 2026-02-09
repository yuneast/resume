# CLAUDE.md

이 파일은 Claude Code (claude.ai/code)가 이 저장소에서 작업할 때 따라야 할 지침을 제공합니다.

## 공통 코딩 규칙

### 핵심 원칙

- **YAGNI (You Aren't Gonna Need It)**: 지금 당장 사용하지 않는 함수나 파일은 만들지 않기
- **KISS (Keep It Simple, Stupid)**: 단순하고 직관적인 코드 작성
- **DRY (Don't Repeat Yourself)**: 코드 중복 금지, 공통 로직은 분리하여 재사용
- **오버엔지니어링 금지**: 필요한 최소 구성만 유지

### 성능 규칙

- **2중 for문(중첩 루프) 금지**
  - Map/Set/Dictionary 인덱싱, 배치 조회, 그룹핑으로 대체
- **N+1 쿼리 금지** (ORM 사용 시)
  - 루프 내 지연 로딩 접근 금지
  - 단일 쿼리 또는 ID 수집 후 IN 조회 사용

### 코드 품질 규칙

- **DTO/VO 사용**: API 응답에 엔티티/모델 직접 노출 금지
- **단일 책임 원칙**: 각 클래스/함수는 하나의 책임만
- **레이어 분리**: Controller/Router → Service → Repository/DAO

### 예외 처리 규칙

- **예외 처리 필수**
  - 외부 API 호출, 파일 I/O, DB 트랜잭션 등 예외 발생 가능한 모든 코드
  - 예외를 무시하지 말고 로깅 또는 적절한 응답 반환
- **유효성 검증 필수**
  - 입력 계층에서 검증 (Controller/Router)
  - 비즈니스 로직 검증 (Service)
  - null/undefined 체크

### Git 커밋 메시지 규칙

**형식:** `[태그] [기능이름] 커밋 설명`

**태그 종류:**
- **[FEA]**: 새로운 기능 추가
- **[REF]**: 코드 리팩토링
- **[BUG]**: 버그 수정
- **[CNF]**: 설정 파일 변경 (application.yml, .env 등)
- **[STYLE]**: 코드 포맷팅 (로직 변경 없음)
- **[DOCS]**: 문서 수정

**주의사항:**
- 커밋 메시지는 한글로 작성
- 한 커밋에는 하나의 논리적 변경사항만 포함
- **Co-Authored-By 사용 금지**

## 프로젝트 개요

Next.js 기반 정적 웹 이력서 생성기입니다. TypeScript payload 파일만 수정하면 아름다운 웹 이력서를 생성하고, 정적 HTML로 내보내어 GitHub Pages에 호스팅할 수 있습니다.


## 핵심 아키텍처

### Payload 중심 데이터 구조

모든 이력서 내용은 `payload/*.ts` 파일에 정의됩니다. 이것이 **사용자의 주요 편집 영역**입니다:

- 각 payload 파일은 하나의 이력서 섹션을 나타냄 (experience, project, skill 등)
- 모든 payload는 `component/common/I*.ts`에 정의된 인터페이스를 따름
- `payload/index.ts`가 모든 payload를 하나로 통합하여 export
- `payload/_global.ts`는 사이트 전체 설정 포함 (SEO, favicon, title)

**이력서 내용 수정 시**: payload 파일만 수정하고, 컴포넌트는 직접 수정하지 않습니다.

### payload/experience.ts 작성 가이드 (HR 관점)

**핵심: 자연스러움 + 정량적 성과**

AI가 작성한 것처럼 보이지 않고, 사람이 자연스럽게 작성한 것처럼 보이면서도 HR에게 임팩트를 주는 표현이 필요합니다.

#### 금지 표현 패턴
- ❌ "~을 통해", "~을 활용한", "~을 위한", "~함으로써"
- ❌ "향상", "극대화", "대폭", "효과적으로", "성공적으로"
- ❌ "완벽히", "혁신적인", "획기적인", "첨단", "안정적인"
- ❌ "및" 과다 사용 (쉼표로 대체)
- ❌ "설계 및 구축", "개선 및 최적화" 같은 나열

#### 좋은 표현 패턴
- ✅ 간결한 명사구: "Redis 캐싱으로 API 응답 속도 50% 개선"
- ✅ 구체적 숫자: "월 100만 건 처리", "응답 시간 0.3초", "비용 90% 절감"
- ✅ 비즈니스 결과: "운영 공수 70% 절감", "장애 대응 시간 50% 단축"
- ✅ 쉼표 구분: "설계, 구현" (대신 "설계 및 구현" X)

#### descriptions 작성 원칙
- 완벽한 문장보다 간결하고 핵심적인 표현
- 기술 스택과 함께 **무엇을 했는지** 명확히
- 불필요한 접속사, 수식어 제거

#### achievements 작성 원칙
- **반드시 정량적 수치 포함** (%, 건수, 시간, 비용)
- 모호한 표현 금지: "유의미하게", "대폭", "크게" 등
- **비즈니스 임팩트 중심**: 기술이 아닌 결과에 집중

#### 예시

**나쁜 예 (AI 티남):**
```
'Redis 캐싱 전략 및 쿼리 튜닝을 통한 대용량 핫딜 데이터 조회 API 성능 개선'
'안정적인 서비스 운영을 위한 크론 서버 헬스체크 및 실시간 장애 감지 파이프라인 구축'
'효율성을 극대화하여 운영 공수를 대폭 절감'
```

**좋은 예 (자연스러움 + HR 관점):**
```
'Redis 캐싱, 쿼리 튜닝으로 API 응답 시간 1.2초 → 0.3초 개선'
'크론 서버 헬스체크, 장애 감지 자동화'
'운영 공수 70% 절감'
```

### 컴포넌트 기반 렌더링

각 이력서 섹션은 `component/` 디렉토리의 React 컴포넌트에 대응됩니다:

- 구조: 메인 컴포넌트는 `component/<section>/index.tsx`, 반복 항목은 `component/<section>/row.tsx`
- 공통 컴포넌트: `component/common/`의 `CommonSection`, `CommonRow`, `CommonDescription`
- 컴포넌트는 payload 데이터를 props로 받아서 렌더링
- `_global`과 `footer`를 제외한 모든 payload는 `disable?: boolean`으로 섹션 숨김 지원

### 섹션 순서 제어

렌더링되는 이력서의 섹션 순서는 **`pages/index.tsx`의 컴포넌트 선언 순서**로 제어됩니다 (29-39번 줄). 섹션 순서를 변경하려면 이 파일에서 컴포넌트 순서를 재배치하세요.

## 일반적인 작업 흐름

### 새 섹션 추가하기
1. 적절한 인터페이스와 함께 `payload/<section>.ts` 파일 생성
2. `component/<section>/index.tsx`에 컴포넌트 생성
3. 원하는 위치에 `pages/index.tsx`에 컴포넌트 import 및 추가
4. `payload/index.ts` export에 payload 추가

### 이력서 내용 변경하기
해당하는 `payload/*.ts` 파일을 직접 수정합니다. 개발 모드에서는 변경사항이 즉시 반영됩니다.

### GitHub Pages 배포 준비하기
1. `package.json`의 `homepage`를 대상 URL로 업데이트
2. `npm run export` 실행
3. 생성된 `docs/` 디렉토리 커밋
4. GitHub Pages가 `main` 브랜치의 `/docs` 폴더에서 제공하도록 설정
