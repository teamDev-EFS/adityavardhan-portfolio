import { Task } from '../types';

export const mockTasks: Task[] = [
  { id: 't1', title: '디자인 시스템 컴포넌트 정리', description: 'Button, Input, Modal, Card 컴포넌트의 Figma 파일 업데이트 및 Storybook 문서화', dueDate: '2024-07-15', priority: 'high', completed: false, projectId: 'p1', createdAt: '2024-07-01', tags: ['디자인', 'UI'] },
  { id: 't2', title: 'API 엔드포인트 유닛 테스트 작성', description: '/users, /tasks, /projects 엔드포인트에 대한 Jest 테스트 커버리지 80% 달성', dueDate: '2024-07-18', priority: 'high', completed: false, projectId: 'p2', createdAt: '2024-07-02', tags: ['백엔드', '테스트'] },
  { id: 't3', title: '주간 팀 미팅 자료 준비', description: '지난 주 성과 요약 및 이번 주 목표 슬라이드 작성 (10장 이내)', dueDate: '2024-07-12', priority: 'medium', completed: false, projectId: 'p3', createdAt: '2024-07-03', tags: ['미팅'] },
  { id: 't4', title: '사용자 인증 플로우 리팩토링', description: 'OAuth 2.0 적용 및 JWT 토큰 갱신 로직 개선, 보안 취약점 패치', dueDate: '2024-07-20', priority: 'high', completed: false, projectId: 'p2', createdAt: '2024-07-04', tags: ['보안', '백엔드'] },
  { id: 't5', title: '랜딩 페이지 카피 수정', description: '마케팅팀 피드백 반영하여 히어로 섹션 문구 및 CTA 버튼 텍스트 수정', dueDate: '2024-07-13', priority: 'low', completed: false, projectId: 'p1', createdAt: '2024-07-05', tags: ['마케팅', 'UI'] },
  { id: 't6', title: '데이터베이스 인덱스 최적화', description: 'users 테이블 쿼리 응답 속도 개선, slow query 분석 후 복합 인덱스 추가', dueDate: '2024-07-22', priority: 'medium', completed: false, projectId: 'p2', createdAt: '2024-07-06', tags: ['DB', '성능'] },
  { id: 't7', title: '모바일 반응형 버그 수정', description: 'iPhone SE(375px)에서 네비게이션 메뉴 겹침 현상, 카드 레이아웃 깨짐 수정', dueDate: '2024-07-14', priority: 'medium', completed: false, projectId: 'p1', createdAt: '2024-07-07', tags: ['버그', 'UI'] },
  { id: 't8', title: 'Q3 OKR 초안 작성', description: '팀 목표 3개, 핵심 결과 지표 각 3개씩 작성 후 팀장 검토 요청', dueDate: '2024-07-11', priority: 'high', completed: false, projectId: 'p3', createdAt: '2024-07-08', tags: ['전략'] },
  { id: 't9', title: '온보딩 가이드 문서 업데이트', description: '신규 입사자를 위한 개발 환경 설정 가이드 최신화 (Node 20, pnpm 8 기준)', dueDate: '2024-07-25', priority: 'low', completed: false, projectId: 'p3', createdAt: '2024-07-09', tags: ['문서'] },
  { id: 't10', title: 'Figma 프로토타입 검토', description: '신규 대시보드 화면 프로토타입 검토 및 인터랙션 피드백 작성', dueDate: '2024-07-10', priority: 'medium', completed: true, projectId: 'p1', createdAt: '2024-07-01', tags: ['디자인'] },
  { id: 't11', title: 'CI/CD 파이프라인 설정', description: 'GitHub Actions를 이용한 자동 빌드/테스트/배포 워크플로우 구성', dueDate: '2024-07-08', priority: 'high', completed: true, projectId: 'p2', createdAt: '2024-07-01', tags: ['DevOps'] },
  { id: 't12', title: '경쟁사 분석 보고서', description: '주요 경쟁사 5개사 제품 기능 비교 분석 및 차별화 전략 제안', dueDate: '2024-07-09', priority: 'medium', completed: true, projectId: 'p3', createdAt: '2024-07-02', tags: ['전략', '분석'] }
];