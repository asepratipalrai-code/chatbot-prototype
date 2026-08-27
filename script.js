const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');
const clearChatBtn = document.getElementById('clear-chat-btn');

const MEMORY_KEY = 'legal-services-chat-memory';
let conversationMemory = loadMemory();
let faqs = [];
let botIsTyping = false;
let lastActionStamp = 0;

const FAQ_DATA = [
  { sl_no: 1, question: 'What is Legal Services?', answer: 'Legal Service means giving of any service in the conduct of any case or other legal proceeding before any Court or other Authority or Tribunal. It also includes the giving of advice on any legal matter.' },
  { sl_no: 2, question: 'What is Free Legal Aid?', answer: 'Whenever a person is required to approach any Court of law/Tribunal for: (a) enforcement of his right, (b) to redress his grievances, (c) to defend his case etc.; or whenever a person is required to approach any Office for receiving the benefits that he is entitled under the law; or whenever a person is in need of any legal Advice/Consultation; if such person(s) is unable to engage an Advocate due to economic or other disabilities, or such person(s) is unable to approach the concerned Office due to social, educational or other disabilities; the State Legal Services Authority would engage/provide an Advocate to such persons from the panel of Advocates maintained by the State Legal Service Authority. The fees of such Advocates, typing/copying charges and other miscellaneous charges would be borne by the State Legal Services Authority. This is Free Legal Aid.' },
  { sl_no: 3, question: 'What are the modes of providing free legal aid?', answer: 'The modes of providing free legal aid are: • payment of Court fees, process fees, expenses of witnesses and all other charges payable or incurred in connection with any legal proceedings. • representation by an Advocate in legal proceedings. • supply of certified copies of judgments, orders, notes of evidence and other documents in legal proceedings. • preparation of pleadings, memo of appeal, paper book including printing and translation of documents in legal proceedings; • drafting of legal documents, special leave petition etc.' },
  { sl_no: 4, question: 'Who are entitled to free legal aid?', answer: 'Not every person is entitled to free legal aid. There are certain conditions. The following persons are entitled to free legal aid: (i) a member of Scheduled Caste or Scheduled Tribe; or (ii) any person in receipt of annual income less than Rs. 3 lakh; or (iii) a woman or a child; or (iv) a victim of trafficking in human being or beggar as referred to in Article 23 of the Constitution; or (v) a woman or a child; or (vi) a mentally ill or otherwise disabled person; or (vii) a person under circumstances or undeserved want, such as being a victim of mass disaster, ethnic violence, caste atrocities, flood, drought, earthquake or industrial disaster; or (viii) an industrial workman; or (ix) a person in custody (arrested person/under trial prisoner), including custody in juvenile home or a protective home within the meaning of Section 2(g) of Immoral Traffic (Prevention) Act, 1956 or psychiatric hospital.' },
  { sl_no: 5, question: 'Is free legal aid provided in every type of case(s)?', answer: 'No. Free legal aid is not given in the proceedings relating to following cases: (i) defamation, (ii) malicious prosecution, (iii) election, (iv) economic offences and offences against social laws (such as Protection of Civil Rights Act, 1955 and Immoral Traffic (Prevention) Act, 1956) etc.' },
  { sl_no: 6, question: 'How should one apply for free legal aid?', answer: 'A person falling under any of the category (mentioned in Q.5) should ideally submit the duly filled and signed application form either at the Office of Sikkim SLSA or to the nearest DLSA or TLSC. The form can be downloaded from this website itself or can be obtained from the Office of Sikkim SLSA at Gangtok or nearest DLSA/TLSC. Once the complete form along with the supporting documents is received, free legal aid would be provided to the applicant forthwith. For the persons in custody, a verbal prayer for free legal aid can be made to the concerned Court where such persons (under trial prisoners) are produced. The concerned Court would immediately engage a legal aid Counsel for such persons.' },
  { sl_no: 7, question: 'What if the person in need of free legal aid is illiterate?', answer: 'Such persons can be assisted by Secretary of DLSA/TLSC, panel Advocate etc. Now we have started the scheme of Para Legal Volunteers (PLVs). The PLVs who are stationed in the villages can gather necessary information of such applicants and fill up the forms for them. The applicant is required to affix an initial or thumb impression on the same.' },
  { sl_no: 8, question: 'Can one obtain the benefit of free legal aid for the purpose of filing bail applications?', answer: 'Yes, free legal aid is available for the purpose of filing bail applications also. In every criminal Court, there is a Remand Advocate appointed by the Sikkim SLSA. Whenever a person in custody is produced before the criminal Court, the Remand Advocate would represent such person (if he/she does not have a private lawyer) and as per the circumstances of the case, would file bail applications for such persons.' },
  { sl_no: 9, question: 'Is free legal aid confined only to criminal cases?', answer: 'Absolutely not. Legal aid is provided equally in civil cases to persons falling under the category: (i) defamation, (ii) malicious prosecution, (iii) election, (iv) economic offences and offences against social laws (such as Protection of Civil Rights Act, 1955 and Immoral Traffic (Prevention) Act, 1956) etc. The benefit of free legal aid in civil cases extends in waiving off the Court fees.' },
  { sl_no: 10, question: 'Is free legal aid confined to the cases before the District Judiciary?', answer: 'No, free legal aid is not confined to cases before the District Judiciary. Legal Aid is provided to the needy from the Lowest Level Court to the Supreme Court of India. Legal Aid Counsel represent such needy persons in the High Courts and also in the Supreme Court of India.' },
  { sl_no: 11, question: 'Where should one approach for obtaining free legal aid?', answer: 'One can visit the following offices for obtaining free legal aid: (i) In the Sub-divisional level, there are Taluk Legal Services Committees (TLSC). Civil Judge-cum-Judicial Magistrates are the Ex-Officio Chairpersons of TLSCs. (ii) In the District level, there are District Legal Services Authorities (DLSA). District and Sessions Judges of the respective districts are the Chairpersons of DLSAs. (iii) In the State level, there is State Legal Services Authority (SLSA) at Gangtok. (iv) In the High Court, there is High Court Legal Services Committee, and (v) In the Supreme Court, there is Supreme Court Legal Services Committee. Apart from the above, a needy person can get in touch with the PLVs of their area. The PLVs would guide them to the nearest Legal Services Office.' },
  { sl_no: 12, question: 'Who are Para-Legal Volunteers (PLVs)?', answer: 'PLVs are a group of volunteers raised by the State Legal Services Authority after providing them with basic legal training. They are selected from different walks of life, such as: retired teachers, retired Government servants, NGOs, self help groups, aganwadi workers, panchayats, educated prisoners with good behaviour and serving long term sentences. Since they work in the grass root level, they act as a bridge between the Legal Services Authorities and the public so as to ensure that legal aid reaches all sections of the people.' },
  { sl_no: 13, question: 'What is the constitution of Sikkim State Legal Services Authority (SLSA)?', answer: 'Sikkim SLSA consists of the following: (i) Chief Justice of the High Court as Patron-in-Chief. (ii) Judge of the High Court as Executive Chairman. (iii) District & Sessions Judge as Member Secretary. (iv) Other Members consisting of the Advocate General, Secretary of Finance, Legal Remembrancer-cum-Law Secretary, Director General of Police, Sr. Advocates, Secretary of IPR, Social Welfare Department, DOP, RMDD etc.' },
  { sl_no: 14, question: 'How does Sikkim SLSA spread legal awareness/legal literacy?', answer: 'Judicial Officers in every district conducts legal literacy/awareness camps twice every month. PLVs, NGOs, police etc. coordinate with the Judicial Officers for organising such awareness camps. This apart, legal awareness is generated by Sikkim SLSA by opening legal aid stalls in fairs/melas, publication in local newspapers, radio/FM, local TV cable, workshops, seminars, training etc.' },
  { sl_no: 15, question: 'What are the functions of Sikkim SLSA?', answer: 'The functions of Sikkim SLSA are multifarious. However, the basic functions includes: (i) providing free and competent legal services to the weaker sections of the society to ensure that opportunities of securing justice are not denied to any citizen by reason of economic or other disabilities; (ii) organising Lok Adalats; and (iii) generating legal awareness/literacy amongst the masses.' },
  { sl_no: 16, question: 'What is Lok Adalat?', answer: 'Lok Adalat is a non-formal and alternative dispute resolution forum wherein the dispute of the parties are settled amicably by way of compromise. There are two conciliators in every lok adalats of which one is a sitting or retired Judge and the other member is a person selected from social workers, specialised in particular field etc.' },
  { sl_no: 17, question: 'What are the types of cases that are settled in the Lok Adalats?', answer: 'The following types of cases can be settled in the Lok Adalats: (i) Any case of civil nature and (ii) Compoundable criminal cases. One can approach the Lok Adalat even at the pre-litigation stage (i.e. before a case is filed in the Court of law). If a case falling under the above category is pending in the Court, the concerned party may request the Court to have the matter referred to the Lok Adalat.' },
  { sl_no: 18, question: 'What is/are the advantages of Lok Adalats?', answer: 'There are many advantages of settlement of a case in the Lok Adalat, some of which are as follows: (i) the cases are determined with utmost expedition. The parties would save their time. (ii) there is no fees to be paid in the Lok Adalat. The parties are not required to engage any Advocate. Even the Court fees paid by the parties would be returned, if the case is amicably settled. Thus, the parties would be saving their money. (iii) since the award of Lok Adalat is prepared on the basis of compromise between the parties, they would maintain their friendly relationships. (iv) an award passed by the Lok Adalat is deemed to be a decree of a civil Court. It is final and binding on all the parties to the dispute. No appeal would lie to any Court against the award. There is finality to the litigation.' },
  { sl_no: 19, question: 'Are there Lok Adalats in the High Court level?', answer: 'Yes, there is lok adalat in the High Court level. In fact, there is lok adalat right from the taluk level to the Supreme Court level. At the taluk, there is Taluk lok adalat. At the district, there is district lok adalat. At the High Court, there is High Court lok adalat and at the Supreme Court, there is Supreme Court lok adalat.' },
  { sl_no: 20, question: 'Are there other forms of Alternative Dispute Resolutions forums?', answer: 'Yes, apart from the lok adalats there are other forms of alternative dispute resolution forums, such as arbitration, conciliation and mediation.' },
  { sl_no: 21, question: 'What is Mediation?', answer: 'Mediation is a non-binding negotiation process in which a neutral third person facilitates the parties to the dispute in arriving at a mutually acceptable settlement. The process is informal where the outcome of the dispute is controlled by the parties themselves. The entire process is confidential. Civil cases, matrimonial and family disputes are best suited for mediation.' }
];

const DEFAULT_ACTIONS = [
  { id: 'apply_legal_aid', label: 'Apply for Legal Aid' },
  { id: 'track_legal_aid', label: 'Track Legal Aid' },
  { id: 'faq_legal_aid', label: 'FAQ on Legal Aid' }
];

userInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' && !event.shiftKey) {
    event.preventDefault();
    sendMessage();
  }
});

userInput.addEventListener('input', () => {
  const hasText = userInput.value.trim().length > 0;
  sendBtn.disabled = !hasText || botIsTyping;
  sendBtn.classList.toggle('disabled', !hasText || botIsTyping);
});

sendBtn.addEventListener('click', sendMessage);
clearChatBtn.addEventListener('click', resetChat);
chatBox.addEventListener('click', (event) => {
  const actionBtn = event.target.closest('.quick-action');
  if (!actionBtn) return;

  const action = actionBtn.dataset.action;
  if (!action) return;

  const now = Date.now();
  if (now - lastActionStamp < 400) return;
  lastActionStamp = now;

  const actionText = actionBtn.textContent.trim();
  appendUserMessage(actionText);
  addToMemory('user', actionText);
  showTypingIndicator();

  setTimeout(() => {
    removeTypingIndicator();
    handleAction(action);
    addToMemory('bot', actionText + ' selected');
    saveMemory();
    focusInput();
  }, 300);
});

initializeChat();

async function initializeChat() {
  await loadFaqs();
  renderDateSeparator('TODAY');
  renderWelcomeMessage();
  userInput.focus();
}

async function loadFaqs() {
  try {
    const response = await fetch('./Resources/sikkim_slsa_faqs.json');
    if (response.ok) {
      const data = await response.json();
      faqs = Array.isArray(data) ? data : FAQ_DATA;
      return;
    }
  } catch (error) {
    console.warn('Using embedded FAQ data fallback.', error);
  }

  faqs = FAQ_DATA;
}

function resetChat() {
  conversationMemory = [];
  saveMemory();
  chatBox.innerHTML = '';
  renderDateSeparator('TODAY');
  renderWelcomeMessage();
  userInput.value = '';
  focusInput();
}

function sendMessage() {
  const text = userInput.value.trim();
  if (!text || botIsTyping) return;

  appendUserMessage(text);
  addToMemory('user', text);
  userInput.value = '';
  updateSendButtonState();

  const reply = buildBotReply(text);
  showTypingIndicator();

  setTimeout(() => {
    removeTypingIndicator();
    appendBotMessage(reply.text, reply.actions || [], { allowHtml: Boolean(reply.allowHtml) });
    addToMemory('bot', reply.text);
    focusInput();
  }, 450);
}

function appendUserMessage(text) {
  const message = document.createElement('div');
  message.className = 'message user-message';
  message.innerHTML = `
    <div class="message-avatar user-avatar"><i class="fa-solid fa-user"></i></div>
    <div class="bubble-wrap">
      <div class="bubble user-bubble">${escapeHtml(text).replace(/\n/g, '<br>')}</div>
      <div class="timestamp">${getCurrentTime()}</div>
    </div>
  `;
  chatBox.appendChild(message);
  scrollToBottom();
}

function appendBotMessage(text, actions = [], options = {}) {
  const { allowHtml = false } = options;
  const message = document.createElement('div');
  message.className = 'message bot-message';

  const actionMarkup = actions.length
    ? `<div class="action-list">${actions
        .map(
          (action) => `
            <button type="button" class="quick-action" data-action="${action.id}">
              ${action.label}
            </button>`
        )
        .join('')}</div>`
    : '';

  const bubbleContent = allowHtml ? text : formatText(text);

  message.innerHTML = `
    <div class="message-avatar bot-avatar"><img src="Resources/SLSA Logo.png" alt="Bot profile" /></div>
    <div class="bubble-wrap">
      <div class="bubble bot-bubble">${bubbleContent}</div>
      ${actionMarkup}
      <div class="timestamp">${getCurrentTime()}</div>
    </div>
  `;

  chatBox.appendChild(message);
  scrollToBottom();
}

function renderWelcomeMessage() {
  const welcomeText =
    'Hello! 👋 I am the Sikkim State Legal Services Authority. I can help you with legal aid information, application guidance, tracking support, and frequently asked questions related to legal services.';

  appendBotMessage(welcomeText, DEFAULT_ACTIONS);
}

function renderDateSeparator(label) {
  const divider = document.createElement('div');
  divider.className = 'date-separator';
  divider.textContent = label;
  chatBox.appendChild(divider);
}

function renderFaqList() {
  if (!faqs.length) {
    appendBotMessage('The legal FAQ list is temporarily unavailable. Please try again in a moment.', []);
    return;
  }

  const faqActions = faqs.map((faq) => ({
    id: `faq_${slugify(faq.question)}`,
    label: faq.question
  }));

  appendBotMessage('Here are the common legal aid questions. Please select one to view the answer.', faqActions);
}

function getPortalLinkMarkup(url, label) {
  return `<a href="${url}" target="_blank" rel="noopener noreferrer">${label}</a>`;
}

function handleAction(id) {
  const actionId = String(id || '');
  if (!actionId) return;

  if (actionId === 'apply_legal_aid') {
    appendBotMessage(
      `You may apply for legal aid through the official portal. Please review the form carefully before submitting your details.\n\nPortal: ${getPortalLinkMarkup('https://scourtapp.nic.in/lsams/nologin/applicationFiling.action?requestLocale=en', 'NALSA : Legal Service Management System')}`,
      [
        { id: 'faq_legal_aid', label: 'View FAQs' },
        { id: 'track_legal_aid', label: 'Track Legal Aid' }
      ],
      { allowHtml: true }
    );
    return;
  }

  if (actionId === 'track_legal_aid') {
    appendBotMessage(
      `To track your application, use the official tracking portal and enter the required application details to view the current status.\n\nPortal: ${getPortalLinkMarkup('https://scourtapp.nic.in/lsams/nologin/applicationTrackingForm.action?requestLocale=en', 'NALSA : Legal Service Management System')}`,
      [
        { id: 'apply_legal_aid', label: 'Apply for Legal Aid' },
        { id: 'faq_legal_aid', label: 'View FAQs' }
      ],
      { allowHtml: true }
    );
    return;
  }

  if (actionId === 'faq_legal_aid') {
    renderFaqList();
    return;
  }

  if (actionId.startsWith('faq_')) {
    const faqKey = actionId.replace(/^faq_/, '');
    const selectedFaq = faqs.find((faq) => slugify(faq.question) === faqKey);

    if (!selectedFaq) {
      appendBotMessage('I could not find that FAQ entry. Please select another question from the list.', []);
      return;
    }

    const answerText = `${selectedFaq.question}\n\n${selectedFaq.answer}`;
    appendBotMessage(answerText, [
      { id: 'faq_legal_aid', label: 'View more FAQs' },
      { id: 'apply_legal_aid', label: 'Apply for Legal Aid' },
      { id: 'track_legal_aid', label: 'Track Legal Aid' }
    ]);
    return;
  }
}

function buildBotReply(inputText) {
  const normalized = inputText.toLowerCase().trim();
  const recentTopics = conversationMemory.slice(-10).map((entry) => entry.text.toLowerCase()).join(' ');

  if (/^(hi|hello|hey|namaste|good morning|good evening|greetings)/.test(normalized)) {
    return {
      text: 'Namaskar. Thank you for contacting the Legal Services Assistant. I can help you with legal aid applications, tracking your status, or answering general legal aid FAQs. Please choose one of the options below.',
      actions: [...DEFAULT_ACTIONS]
    };
  }

  if (/(apply|application|legal aid)/i.test(normalized) || /legal aid/i.test(recentTopics)) {
    return {
      text: `To apply for legal aid, eligible persons may submit an application through the official portal. Please use the link below to begin the application process.\n\nPortal: ${getPortalLinkMarkup('https://scourtapp.nic.in/lsams/nologin/applicationFiling.action?requestLocale=en', 'NALSA : Legal Service Management System')}`,
      actions: [
        { id: 'faq_legal_aid', label: 'View FAQs' },
        { id: 'track_legal_aid', label: 'Track Legal Aid' }
      ],
      allowHtml: true
    };
  }

  if (/(track|tracking|status)/i.test(normalized)) {
    return {
      text: `You can track the status of your legal aid application through the tracking portal. Enter your application details to view the progress and next steps.\n\nPortal: ${getPortalLinkMarkup('https://scourtapp.nic.in/lsams/nologin/applicationTrackingForm.action?requestLocale=en', 'NALSA : Legal Service Management System')}`,
      actions: [
        { id: 'apply_legal_aid', label: 'Apply for Legal Aid' },
        { id: 'faq_legal_aid', label: 'View FAQs' }
      ],
      allowHtml: true
    };
  }

  if (/^(faq|frequently asked questions?|legal faq|faq on legal aid)$/i.test(normalized) || /\bfrequently asked questions?\b/i.test(normalized)) {
    return {
      text: 'Here are the common legal-aid questions currently available.',
      actions: faqs.map((faq) => ({ id: `faq_${slugify(faq.question)}`, label: faq.question }))
    };
  }

  const match = findFaqMatch(normalized);
  if (match) {
    return {
      text: `${match.question}\n\n${match.answer}`,
      actions: [
        { id: 'faq_legal_aid', label: 'View more FAQs' },
        { id: 'apply_legal_aid', label: 'Apply for Legal Aid' },
        { id: 'track_legal_aid', label: 'Track Legal Aid' }
      ]
    };
  }

  return {
    text: 'Invalid question asked.',
    actions: [...DEFAULT_ACTIONS]
  };
}

function findFaqMatch(inputText) {
  if (!faqs.length) return null;

  const normalized = inputText.toLowerCase();
  const stopWords = new Set([
    'a', 'an', 'and', 'are', 'as', 'at', 'be', 'by', 'can', 'do', 'does', 'for', 'from',
    'have', 'how', 'i', 'im', 'in', 'is', 'it', 'its', 'of', 'on', 'or', 'our', 'should',
    'that', 'the', 'their', 'there', 'they', 'this', 'to', 'was', 'we', 'what', 'when',
    'where', 'which', 'who', 'why', 'will', 'with', 'you', 'your', 'about', 'one', 'into'
  ]);
  const userWords = normalized
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter((word) => word && !stopWords.has(word))
    .filter((word, index, arr) => arr.indexOf(word) === index);

  if (!userWords.length) return null;

  let bestMatch = null;
  let bestScore = 0;

  faqs.forEach((faq) => {
    const faqText = `${faq.question} ${faq.answer}`.toLowerCase();
    const faqWords = faqText
      .replace(/[^a-z0-9\s]/g, ' ')
      .split(/\s+/)
      .filter((word) => word && !stopWords.has(word));

    const score = userWords.filter((word) => faqWords.includes(word)).length;
    if (score > bestScore) {
      bestScore = score;
      bestMatch = faq;
    }
  });

  return bestScore >= 2 ? bestMatch : null;
}

function showTypingIndicator() {
  botIsTyping = true;
  const loading = document.createElement('div');
  loading.className = 'message bot-message typing-indicator';
  loading.innerHTML = `
    <div class="message-avatar bot-avatar"><i class="fa-solid fa-scale-balanced"></i></div>
    <div class="bubble-wrap">
      <div class="bubble bot-bubble typing-bubble">
        <span></span><span></span><span></span>
      </div>
    </div>
  `;
  chatBox.appendChild(loading);
  scrollToBottom();
}

function removeTypingIndicator() {
  const indicator = document.querySelector('.typing-indicator');
  if (indicator) indicator.remove();
  botIsTyping = false;
  updateSendButtonState();
}

function addToMemory(role, text) {
  conversationMemory.push({ role, text });
  if (conversationMemory.length > 10) {
    conversationMemory = conversationMemory.slice(-10);
  }
  saveMemory();
}

function saveMemory() {
  try {
    localStorage.setItem(MEMORY_KEY, JSON.stringify(conversationMemory.slice(-10)));
  } catch (error) {
    console.warn('Unable to persist conversation memory.', error);
  }
}

function loadMemory() {
  try {
    const saved = localStorage.getItem(MEMORY_KEY);
    if (!saved) return [];
    const parsed = JSON.parse(saved);
    return Array.isArray(parsed) ? parsed.slice(-10) : [];
  } catch (error) {
    console.warn('Unable to load conversation memory.', error);
    return [];
  }
}

function updateSendButtonState() {
  const hasText = userInput.value.trim().length > 0;
  sendBtn.disabled = !hasText || botIsTyping;
  sendBtn.classList.toggle('disabled', !hasText || botIsTyping);
}

function focusInput() {
  userInput.focus();
  updateSendButtonState();
}

function scrollToBottom() {
  chatBox.scrollTop = chatBox.scrollHeight;
}

function formatText(text) {
  return escapeHtml(text).replace(/\n/g, '<br>');
}

function escapeHtml(text) {
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function getCurrentTime() {
  return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

function slugify(value) {
  return String(value)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

window.addEventListener('load', () => {
  userInput.value = '';
  updateSendButtonState();
});