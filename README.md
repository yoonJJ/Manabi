# Manabi — 일본어 학습 플랫폼

## 프로젝트 소개

히라가나/가타카나 학습, 기본 표현, 숫자, 퀴즈, AI 일본어 회화 기능을 갖춘 일본어 입문자용 학습 앱입니다.
순수 HTML/CSS/JS로 구성되어 있으며, 별도 서버 없이 브라우저에서 바로 실행됩니다.

## 현재 기능

- **히라가나/가타카나 학습** — 10개 레슨 단위로 46자 학습, 마스터리 레벨 시스템
- **기본 표현** — 일상 인사말 12가지 (음성 재생)
- **숫자** — 1~10 일본어 숫자
- **퀴즈 4종** — 글자→로마자, 로마자→글자, 듣기, 약점 복습
- **통계/게이미피케이션** — XP, 연속 학습일, 글자별 마스터리, 약점 분석

## 추가 예정: AI 일본어 회화

LLM을 활용하여 일본어로 대화하는 기능을 추가합니다.

### LLM 프로바이더

두 가지 방식을 지원합니다.

| 프로바이더 | 방식 | API 키 | 비용 |
|-----------|------|--------|------|
| **Ollama (로컬)** | 로컬 모델 직접 실행 | 불필요 | 무료 |
| **OpenAI (GPT)** | 클라우드 API 호출 | 필요 | 유료 |
| **Google (Gemini)** | 클라우드 API 호출 | 필요 | 유료/무료 티어 |
| **Anthropic (Claude)** | 클라우드 API 호출 | 필요 | 유료 |

### API 키 관리 방식

**세션 메모리 방식** — API 키를 브라우저 저장소에 저장하지 않습니다.

- 앱 실행 시 설정 패널에서 API 키 입력
- JavaScript 변수(메모리)에만 보관
- 브라우저 탭을 닫으면 키가 자동으로 사라짐
- localStorage/sessionStorage/쿠키 일체 사용하지 않음
- Ollama(로컬)는 키 입력 없이 바로 사용 가능

### 구현 설계

#### 1. 통합 LLM 인터페이스

모든 프로바이더를 하나의 인터페이스로 추상화합니다.

```
┌─────────────────────────────────┐
│          채팅 UI                 │
│   (메시지 목록 + 입력창)            │
└──────────┬──────────────────────┘
           │
┌──────────▼──────────────────────┐
│      LLM Provider (추상 계층)     │
│  ┌────────┬────────┬──────────┐ │
│  │ Ollama │  GPT   │ Gemini   │ │
│  │(로컬)  │(OpenAI)│(Google)   │ │
│  ├────────┼────────┼──────────┤ │
│  │ Claude │        │          │ │
│  │(Anthr.)│        │          │ │
│  └────────┴────────┴──────────┘ │
└─────────────────────────────────┘
```

각 프로바이더별 API 호출 방식:

```
Ollama:    POST http://localhost:11434/api/chat
OpenAI:    POST https://api.openai.com/v1/chat/completions
Gemini:    POST https://generativelanguage.googleapis.com/v1beta/models/{model}:streamGenerateContent
Claude:    POST https://api.anthropic.com/v1/messages
```

#### 2. UI 구성

- 사이드바에 "AI 회화" 메뉴 추가
- **설정 패널**: 프로바이더 선택 + API 키 입력 + 모델 선택
- **채팅 화면**: 메시지 목록 + 입력창
- **상태 표시**: 연결 상태, 현재 사용 중인 모델명
- **대화 초기화** 버튼

설정 패널 흐름:

```
1. 프로바이더 선택 (Ollama / GPT / Gemini / Claude)
   │
   ├─ Ollama 선택 → 연결 확인 → 모델 목록 자동 로드 → 바로 사용
   │
   └─ 클라우드 선택 → API 키 입력 → 모델 드롭다운 표시 → 사용
```

#### 3. 시스템 프롬프트

AI에게 "일본어 회화 선생님" 역할을 부여합니다.

```
あなたは日本語の会話の先生です。
- 学習者は韓国語話者で、日本語の初心者です。
- やさしい日本語で話してください。
- 各返答に韓国語の翻訳を括弧で添えてください。
- 文法や表現の間違いがあれば、優しく訂正してください。
```

#### 4. 핵심 기능

| 기능 | 설명 |
|------|------|
| 프로바이더 전환 | 드롭다운으로 Ollama/GPT/Gemini/Claude 전환 |
| 모델 선택 | 프로바이더별 사용 가능한 모델 목록 표시 |
| 스트리밍 응답 | 글자 단위로 실시간 표시 (모든 프로바이더 지원) |
| 대화 맥락 유지 | 이전 메시지를 API에 함께 전송 |
| 연결 상태 표시 | Ollama 실행 여부 / API 키 유효성 표시 |
| 음성 재생 | AI 응답의 일본어 부분을 TTS로 재생 (기존 speak 함수 활용) |
| 세션 키 관리 | 브라우저 닫으면 API 키 자동 삭제 |

#### 5. 프로바이더별 모델 목록 (기본값)

| 프로바이더 | 모델 |
|-----------|------|
| Ollama | 로컬 설치된 모델 자동 감지 (`/api/tags`) |
| OpenAI | gpt-4o, gpt-4o-mini |
| Gemini | gemini-2.5-flash, gemini-2.5-pro |
| Claude | claude-sonnet-4-6, claude-haiku-4-5 |

### 사전 준비

#### Ollama (로컬 모델)

```bash
# Ollama 설치 (macOS)
brew install ollama

# Ollama 서버 시작
ollama serve

# 모델 다운로드 (원하는 모델 선택)
ollama pull gemma3
ollama pull gemma4
```

#### 클라우드 API

각 서비스에서 API 키를 발급받으세요:

- OpenAI: https://platform.openai.com/api-keys
- Google AI: https://aistudio.google.com/apikey
- Anthropic: https://console.anthropic.com/settings/keys

### 기술 스택

- 프론트엔드: HTML / CSS / Vanilla JS (기존 구조 유지)
- LLM: Ollama (로컬) + OpenAI / Gemini / Claude (클라우드)
- 추가 의존성 없음
- 백엔드 서버 없음

### 제약 사항

- Ollama 사용 시: 로컬에서 Ollama가 실행 중이어야 합니다
- 클라우드 API 사용 시: 유효한 API 키가 필요합니다
- 클라우드 API 키는 브라우저에서 직접 호출하므로 본인 로컬 환경에서만 사용하세요
- Claude API는 브라우저 직접 호출 시 CORS 제한이 있을 수 있습니다 (필요 시 Ollama 경유 또는 프록시 고려)
- 모델 크기/종류에 따라 응답 속도와 품질이 달라집니다

## 실행 방법

```bash
# 아무 로컬 서버로 실행 (예시)
python3 -m http.server 8000
# 또는
npx serve .
```

브라우저에서 `http://localhost:8000` 접속
# Manabi
