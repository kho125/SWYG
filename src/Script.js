export const prologue = [
  {
    id: 0,
    str: `어느밤..\n핸드포을 보다 잠든 나는\n메신저 알람 소리에 잠에서 깬다.\n\n\n(아니 이 새벽에 누가 연락을 해!?)`,
  },
  {
    id: 1,
    str: `메신저를 확인하니\n정체모를 메신저들이 잔뜩 와있었다..\n의사라는 사람이 왜 나한테 연락을 하지?`,
  },
];

export const startNarration = [
  {
    id: 0,
    str: `뉴진스의 OMG 뮤직비디오는\n뉴진스 멤버들이 상담을\n받는 내용인데요.`,
  },
  {
    id: 1,
    str: `이번엔 여러분이 상담사가 되어\n멤버들을 상담해 줄 차례입니다.`,
  },
  {
    id: 3,
    str: `상담 내용에 따라\n마지막에 현실로 함께 돌아오는\n멤버가 달라지게 될 겁니다.\n그럼 시작해 볼까요?`,
  },
];

export const haniQuestion = [
  {
    id: 0,
    qa: { str: `저는 처음에는\n어떤게 진짜 나인지\n너무 혼란스러웠어요` },
    q1: { score: 0, str: `혼란이라니.. 갑자기?` },
    q2: { score: 1, str: `어떤 부분에서 혼란스러웠나요?` },
  },
  {
    id: 1,
    qa: { str: `사람들이 원하는 나와\n진짜 나 사이에서 많이\n 헷갈려했어요` },
    q1: { score: 1, str: `그래서, 지금은 어때요?` },
    q2: { score: 0, str: `흔한 인지부조화\n증상으로 보이는군요` },
  },
  {
    id: 2,
    qa: { str: `하지만 이제\n저는 자신을 찾은거 같아요!!\n저는..` },
    q1: { score: 1, str: `당신은..?` },
    q2: { score: 0, str: `하니잖아요!` },
  },
  {
    id: 3,
    qa: { str: `저는 당신을 위한\n인공지능 비서 Siri에요` },
    q1: { score: 2, str: `Siri야~` },
    q2: { score: 0, str: `하이 빅스비` },
  },
  {
    id: 4,
    qa: { str: `무엇을 도와드릴까요?` },
    q1: { score: 0, str: `빨리 이 이상한 꿈에서\n깨고 싶네요` },
    q2: {
      score: 2,
      str: `하니씨를 만나서 반가워요\n조금만 더 여기 있고 싶네요`,
    },
  },
  {
    id: 5,
    qa: {
      str: `저는 당신이 원하는 것이면\n무엇이든 이루어 드립니다.\n잠시만 기다려 보세요!`,
    },
    q1: { score: 0, str: `네 알겠습니다` },
    q2: { score: 1, str: `기다릴 수 없네요` },
  },
];

export const minjiQuestion = [
  {
    id: 0,
    qa: { str: `안녕하세요.\n지금 환자분들을 담당하는\n주치의 김민지입니다.` },
    q1: { score: 0, str: `아까 의사라고 하는 사람을\n이미 만났는데요?` },
    q2: { score: 1, str: `당신이 진짜 의사군요` },
  },
  {
    id: 1,
    qa: {
      str: `아까 만나셨던 분은\n사실 의사가 아닙니다.\n본인이 의사라는 착각을 하고 계신 분이죠`,
    },
    q1: { score: 2, str: `당신도 어딘가 힘든 부분이 있지는 않나요?` },
    q2: { score: 0, str: `그렇군요` },
  },
  {
    id: 2,
    qa: {
      str: `어찌됐든, 저는 다음 환자를\n보러 가야해요!!\n계속 힘써주세요!!`,
    },
    q1: { score: 0, str: `네 알겠습니다.` },
    q2: { score: 1, str: `민지씨도 화이팅하세요!` },
  },
  {
    id: 3,
    qa: { str: `다들 잘 만나고 오셨나요?` },
    q1: { score: 1, str: `네 이제 저도 무엇이\n진짜인지 모르겠네요` },
    q2: { score: 0, str: `멤버들을 다시 볼수는 없나요?` },
  },
  {
    id: 4,
    qa: {
      str: `멤버들이 각자 방으로 돌아갔어요.\n이제 꿈에서 깰 시간이 된 것 같아요.`,
    },
    q1: { score: 1, str: `그런 것 같네요` },
    q2: { score: 0, str: `여기에 남고 싶어요` },
  },
  {
    id: 5,
    qa: { str: `가자.` },
    q1: { score: 2, str: `같이 가자` },
    q2: { score: 0, str: `이제 일어날 시간이네` },
  },
];

export const hyeinQuestion = [
  {
    id: 0,
    qa: { str: `저는 사실..` },
    q1: { score: 1, str: `신데렐라?` },
    q2: { score: 0, str: `백설공주?` },
  },
  {
    id: 1,
    qa: { str: `네 맞아요!!\n동화에 나오는!!` },
    q1: { score: 0, str: `네 알겠습니다..` },
    q2: { score: 1, str: `어쩐지 아름다우시더라!` },
  },
  {
    id: 2,
    qa: { str: `그런데 지금 혹시\n시간이 어떻게 되나요?` },
    q1: { score: 0, str: `오후 12시요` },
    q2: { score: 2, str: `오전 12시요` },
  },
  {
    id: 3,
    qa: { str: `이미 늦었네요..\n저는 이제 그만 빨리 가봐야해요` },
    q1: { score: 1, str: `어디를 가봐야 하죠?` },
    q2: { score: 0, str: `갑자기 가시면 안됩니다!!` },
  },
  {
    id: 4,
    qa: { str: `지하철 막차는 놓치면\n안되잖아요!!` },
    q1: { score: 0, str: `네 알겠습니다..` },
    q2: { score: 1, str: `공주님이 막차라니요?` },
  },
  {
    id: 5,
    qa: { str: `결국엔\n현실로 돌아가야 하잖아요` },
    q1: { score: 0, str: `저도 그렇구요` },
    q2: { score: 2, str: `아무리 공주님이어도\n현실로 돌아가야 하는군요` },
  },
];

export const harinQuestion = [
  {
    id: 0,
    qa: { str: `야옹` },
    q1: { score: 1, str: `야옹??` },
    q2: { score: 0, str: `멍멍!!` },
  },
  {
    id: 1,
    qa: {
      str: `저는 이게 고민이예요..\n사람들이 자꾸 저를 고양이인줄 알아요`,
    },
    q1: { score: 2, str: `하지만.. 어느정도 닮은건\n사실인걸요..` },
    q2: { score: 0, str: `하지만.. 해린씨는 사람이에요` },
  },
  {
    id: 2,
    qa: { str: `그렇죠.. 츄르는 그냥 맛있어서 먹는거에요!!` },
    q1: { score: 1, str: `지금 무엇을\n그리고 있나요?` },
    q2: { score: 0, str: `손에 그거는 뭐에요?` },
  },
  {
    id: 3,
    qa: { str: `이 노트요??\n이건 그냥 아무것도 아닌데..` },
    q1: { score: 0, str: `저만 보여주세요!` },
    q2: { score: 1, str: `비밀로 할게요!` },
  },
  {
    id: 4,
    qa: { str: `그럼 비밀로 하기로 해요!!\n상담사님만 보여드릴 거예요` },
    q1: { score: 0, str: `무슨 그림이죠?` },
    q2: { score: 1, str: `귀여운 캐릭터들이군요` },
  },
  {
    id: 5,
    qa: {
      str: `저는 그냥 창밖으로\n보이는 걸 그린거에요\n상담사님도 창밖에 저것들이\n보이시나요?`,
    },
    q1: { score: 2, str: `네 아주 잘 보이네요` },
    q2: { score: 0, str: `아니요.. 보이지 않는걸요` },
  },
];

export const danielQuestion = [
  {
    id: 0,
    qa: { str: `안녕하세요:)\n뉴진스의 다니엘입니다!!` },
    q1: { score: 1, str: `뉴진스?\n아이돌이요?` },
    q2: { score: 0, str: `뉴진스?\n어기서 들어본거 같은데?` },
  },
  {
    id: 1,
    qa: { str: `혹시 뉴진스..\n잘 모르시나요?` },
    q1: { score: 1, str: `그거 알아요!!\nAttention!!` },
    q2: { score: 0, str: `아니요.. 너무 잘 알지요` },
  },
  {
    id: 2,
    qa: { str: `네 저희는 이번에 신곡 "OMG"로 활동하고 있어요!!` },
    q1: { score: 1, str: `그런데 저는 상담 중\n이었던것 같은데?` },
    q2: { score: 0, str: `다니엘씨는 혹시\n어떤 증상이 있나요?` },
  },
  {
    id: 3,
    qa: {
      str: `저희가 사실 뮤직비디오\n촬영중이라...ㅎㅎ\n다들 연기에 몰입했나봐요\n저희는 뉴진스랍니다!!!`,
    },
    q1: { score: 0, str: `하지만 저는 상담사로\n왔는걸요?` },
    q2: { score: 1, str: `어쩐지 다들 이름이 익숙했어요` },
  },
  {
    id: 4,
    qa: {
      str: `그런가요.. 아무튼! 뉴진스 노래중에 어떤 곡을 제일 좋아하시나요?`,
    },
    q1: { score: 0, str: `뉴진스의 하입보이요!` },
    q2: { score: 2, str: `Attention!!` },
  },
  {
    id: 5,
    qa: {
      str: `저는 아무래도 데뷔곡이\n기억에 가장 남는거 같아요..\n지금 상황에 어울리는 가사가 있는데..`,
    },
    q1: { score: 2, str: `꿈에서 깨워주지마` },
    q2: { score: 0, str: `Drop the Question` },
  },
];
