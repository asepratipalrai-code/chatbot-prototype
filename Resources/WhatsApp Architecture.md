# UI/UX DESIGN GUIDE
## WhatsApp-Inspired 1-to-1 Chat Interface for Legal Services FAQ Bot

### 1. DESIGN OBJECTIVE

Design the complete user interface as a **WhatsApp-inspired 1-to-1 chat experience**, but do **not** reproduce WhatsApp branding, logo, proprietary assets, or copyrighted visual elements.

The application is a **single-user-to-bot conversational interface**.

The primary purpose is to allow citizens/users to:

- Ask frequently asked questions.
- Ask basic legal-services-related queries.
- Get guided answers from the bot.
- Select suggested questions/options.
- Continue a natural conversational flow.
- Access important legal-services information through chat.

The experience should feel immediately familiar to users of WhatsApp while being clearly branded as a **Legal Services Assistant**.

The UI should be:

- Clean
- Modern
- Minimal
- Mobile-first
- Highly accessible
- Fast
- Familiar
- Professional
- Government-service appropriate
- Responsive across mobile, tablet and desktop

---

# 2. CORE DESIGN PRINCIPLE

The application should feel like:

> "Opening a WhatsApp conversation with a helpful legal-services assistant."

Do NOT design it like:

- A traditional admin dashboard
- A customer-support ticketing system
- A generic AI chatbot landing page
- A complex AI assistant with multiple panels
- A messaging application with multiple conversations

There should be **only ONE conversation**.

The bot is the only conversational participant.

---

# 3. OVERALL LAYOUT

Use a classic messaging application structure:

```text
┌──────────────────────────────────────────────┐
│              CHAT HEADER                     │
│  Bot Avatar   Legal Services Assistant  ⋮   │
├──────────────────────────────────────────────┤
│                                              │
│              CHAT AREA                       │
│                                              │
│  Today                                       │
│                                              │
│      ┌─────────────────────────────┐         │
│      │ Hello! How can I help you? │         │
│      └─────────────────────────────┘         │
│                                              │
│                 ┌──────────────────────┐     │
│                 │ I need legal aid      │     │
│                 └──────────────────────┘     │
│                                              │
│      ┌────────────────────────────────┐      │
│      │ Sure! I can help you with...  │      │
│      └────────────────────────────────┘      │
│                                              │
├──────────────────────────────────────────────┤
│  ＋   Type a message...             ➤        │
└──────────────────────────────────────────────┘
```

On desktop, the chat should be centered inside a constrained application shell rather than stretching across the entire screen.

---

# 4. MOBILE-FIRST DESIGN

Mobile is the primary design target.

Design first for approximately:

- 360px
- 375px
- 390px
- 412px
- 430px

Then scale gracefully to tablet and desktop.

The chat must occupy essentially the complete viewport on mobile.

Avoid unnecessary:

- Sidebars
- Large margins
- Cards around the entire chat
- Dashboard navigation
- Multiple columns

The user should be able to start chatting immediately.

---

# 5. DESKTOP LAYOUT

On larger screens, use a centered chat application.

Recommended structure:

```text
          ┌─────────────────────────────────────┐
          │                                     │
          │      ┌─────────────────────────┐    │
          │      │      CHAT HEADER        │    │
          │      ├─────────────────────────┤    │
          │      │                         │    │
          │      │       CHAT AREA         │    │
          │      │                         │    │
          │      │                         │    │
          │      ├─────────────────────────┤    │
          │      │      MESSAGE INPUT      │    │
          │      └─────────────────────────┘    │
          │                                     │
          └─────────────────────────────────────┘
```

The chat container should have:

- Maximum width around 900–1000px.
- Full available height.
- Rounded corners on desktop where appropriate.
- Subtle shadow/border.
- No excessive decoration.

Do not make the desktop UI look like a mobile phone mockup.

---

# 6. CHAT HEADER

The header should resemble a modern messaging application header.

Include:

### Left side

- Bot avatar
- Bot name
- Online/availability indicator
- Optional small status text

Example:

**Legal Services Assistant**

`Online`

### Right side

Keep actions minimal.

Possible actions:

- Information
- Clear chat
- Help
- More options

Do not add unnecessary messaging-app functionality.

Avoid:

- Voice call
- Video call
- Contact details
- Group controls
- Status
- Stories
- Multiple conversation controls

This is strictly a 1-to-1 bot conversation.

---

# 7. BOT AVATAR

Create a professional assistant avatar.

The avatar should communicate:

- Trust
- Government/public service
- Legal assistance
- Technology
- Helpfulness

Avoid making it look like a generic cartoon AI robot.

Prefer a simple professional icon/avatar.

The avatar should work well at:

- 32px
- 40px
- 48px

Use a circular avatar.

---


# 8. MESSAGE BUBBLES

Use two distinct message styles.

## BOT MESSAGE

Bot messages should appear on the left.

Example:

```text
┌───────────────────────────────────┐
│ Hello! 👋                         │
│                                   │
│ I am the Legal Services Assistant │
│ of Sikkim SLSA. I can help you    │
│ with legal aid and related FAQs.  │
│                                   │
│ 10:32 AM                          │
└───────────────────────────────────┘
```

Characteristics:

- Light background
- Dark text
- Rounded corners
- Comfortable padding
- Maximum width around 75–80%
- Timestamp in smaller text

## USER MESSAGE

User messages should appear on the right.

Example:

```text
                 ┌──────────────────────────┐
                 │ How can I apply for      │
                 │ free legal aid?           │
                 │                 10:33 AM ✓│
                 └──────────────────────────┘
```

Characteristics:

- Visually distinct from bot messages
- Maximum width around 75–80%
- Rounded corners
- Clear text contrast
- Timestamp
- Optional delivery/read indicator if appropriate

Do not make message bubbles excessively rounded or oversized.

---

# 10. MESSAGE TYPOGRAPHY

Prioritize readability.

Recommended hierarchy:

### Message text

- 15–16px mobile
- 15–17px desktop
- Line height around 1.45–1.6

### Timestamp

- 11–12px

### Bot name

- 15–16px
- Medium/semibold

### Suggested questions

- 14–15px

Avoid extremely small text.

Legal information must remain highly readable.

---

# 11. CHAT DATE SEPARATOR

Use lightweight date separators similar to modern messaging applications.

Example:

```text
             TODAY
```

or

```text
          17 AUGUST 2026
```

Keep them subtle.

---

# 12. WELCOME MESSAGE

When the chat is empty, display a welcoming bot message.

Example:

> Hello! 👋  
> I’m the Legal Services Assistant.  
> I can help you find information about legal aid, eligibility, application procedures, documents, and other basic queries.

Follow it with suggested questions.

The welcome state should feel useful immediately.

---

# 13. QUICK QUESTIONS / SUGGESTIONS

This is an important component.

When the user opens the chat, show suggested questions underneath the welcome message.

Examples:

- How can I apply for legal aid?
- Who is eligible for free legal aid?
- What documents are required?
- How can I check my application?
- Where can I get legal assistance?
- What is legal aid?

Use compact pill/button-style suggestions.

Example:

```text
┌───────────────────────────────┐
│ How can I apply for legal aid?│
└───────────────────────────────┘

┌───────────────────────────────┐
│ Who is eligible for legal aid?│
└───────────────────────────────┘

┌───────────────────────────────┐
│ Required documents             │
└───────────────────────────────┘
```

On mobile, these can wrap vertically or horizontally depending on available space.

---

# 14. MESSAGE INPUT

The bottom input area is one of the most important UI components.

Design it similar to a modern messaging composer.

Structure:

```text
┌──────────────────────────────────────────────┐
│  ＋   Type your question...             ➤   │
└──────────────────────────────────────────────┘
```

Include:

- Attachment/additional action only if actually required
- Text input
- Send button

The input should:

- Remain visually fixed at the bottom.
- Respect mobile safe-area insets.
- Expand vertically for longer messages.
- Never cover chat messages.
- Support keyboard interaction.
- Clearly indicate disabled/loading state.

Placeholder:

**Type your question...**

or:

**Ask a legal services question...**

---

# 15. SEND BUTTON

Use a prominent but compact circular send button.

States:

### Disabled

When input is empty.

### Enabled

When the user has entered text.

### Loading

When waiting for bot response.

During loading, prevent duplicate submissions.

---

# 16. BOT TYPING INDICATOR

When the bot is generating a response, show a messaging-style typing indicator.

Example:

```text
┌─────────────────────┐
│  ●  ●  ●            │
└─────────────────────┘
```

Animate subtly.

Do not use a large loading spinner in the middle of the screen.

The typing indicator should appear as a normal bot message.

---

# 17. BOT RESPONSE STATES

Support the following visual states:

### Normal response

Standard bot bubble.

### Typing

Animated typing indicator.

### Error

Friendly error message.

Example:

> Sorry, I’m unable to process that right now. Please try again.

Provide:

**Try again**

### No answer / unsupported question

The bot should politely explain that it could not find an answer and guide the user toward supported topics.

Example:

> I’m sorry, I don’t have enough information to answer that. You can try asking about legal aid eligibility, documents, application procedures, or other legal-services FAQs.

---

# 18. RICH BOT RESPONSES

The bot should not be limited to plain text.

Design the UI to support:

- Bold text
- Paragraphs
- Numbered lists
- Bullet lists
- Links
- Simple headings
- Highlighted information
- Buttons
- Suggested questions

Example:

```text
To apply for legal aid:

1. Submit the application.
2. Provide the required documents.
3. Your application will be reviewed.
4. You will be informed about the status.
```

Ensure rich text remains visually consistent with the chat bubble.

---

# 19. ACTION BUTTONS

The bot may return contextual actions.

Example:

```text
┌────────────────────────────────────┐
│ You can learn more about legal aid │
│ through the following options:    │
│                                    │
│ [Eligibility]                      │
│ [Required Documents]               │
│ [How to Apply]                     │
└────────────────────────────────────┘
```

Buttons should look like part of the conversation rather than dashboard controls.

---

# 20. LINK HANDLING

Links inside bot responses should be:

- Clearly identifiable.
- Accessible.
- Easy to tap.
- Open safely.
- Visually consistent with the application.

Avoid displaying raw long URLs where possible.

Use descriptive labels such as:

**Visit Legal Services Portal**

---

# 21. SCROLL BEHAVIOUR

The chat area must be independently scrollable.

Important behaviour:

- Automatically scroll to the newest message when appropriate.
- Do not aggressively force-scroll if the user is reading older messages.
- Show a "new messages" indicator if appropriate.
- Preserve scroll position.
- Maintain smooth scrolling.

The message composer should remain fixed.

---

# 22. RESPONSIVE BEHAVIOUR

### Mobile

Full-screen chat.

### Tablet

Centered chat with moderate margins.

### Desktop

Centered application container with a maximum width.

### Large desktop

Do not unnecessarily enlarge the chat bubbles.

Keep the conversation comfortable and readable.

---

# 23. COLOR SYSTEM

Use a **WhatsApp-inspired but original** color direction.

Do not copy WhatsApp's exact brand palette.

Suggested design language:

### Primary

Professional legal/public-service green.

### Background

Very light neutral/green-tinted background.

### Surface

White or near-white.

### Text

Dark charcoal.

### Secondary text

Muted gray.

### Borders

Very subtle gray.

### Error

Standard accessible error red.

The interface should feel calm and trustworthy rather than overly colorful.

Create all colors through centralized design tokens/theme variables.

Do not hard-code colors throughout components.

---

# 24. GOVERNMENT / LEGAL SERVICES VISUAL LANGUAGE

Although the UI is WhatsApp-inspired, it must still feel like an official legal-services application.

Use subtle design cues such as:

- Professional typography
- Trustworthy color palette
- Clean spacing
- Minimal government-service branding
- Legal-service assistant identity
- Official terminology
- Accessibility-first design

Avoid:

- Excessive gradients
- Neon colors
- Gaming-style UI
- Excessive animations
- Futuristic AI graphics
- Cartoonish legal imagery
- Overly decorative elements

---

# 25. ACCESSIBILITY

Accessibility is mandatory.

Ensure:

- WCAG-conscious color contrast.
- Keyboard navigation.
- Visible focus states.
- Screen-reader-friendly labels.
- Proper semantic HTML.
- Touch targets of at least approximately 44px where appropriate.
- No information conveyed by color alone.
- Reduced-motion support.
- Accessible message timestamps.
- Accessible send button.
- Accessible suggested-question buttons.

The application should remain usable with browser zoom.

---

# 26. ANIMATIONS

Use subtle animations only.

Recommended:

- Message appearance/fade
- Typing indicator
- Button hover
- Send interaction
- Smooth scrolling

Avoid:

- Large page transitions
- Excessive bouncing
- Distracting animations
- Long delays before messages appear

Animations should generally be short and purposeful.

Respect:

`prefers-reduced-motion`

---

# 27. EMPTY STATE

The initial state should not feel empty.

Show:

1. Bot avatar
2. Bot identity
3. Welcome message
4. Short explanation
5. Suggested questions

Example:

```text
              [BOT AVATAR]

       Legal Services Assistant
                  Online

   Hello! 👋 How can I help you today?

   ┌───────────────────────────────┐
   │ How can I apply for legal aid?│
   └───────────────────────────────┘

   ┌───────────────────────────────┐
   │ Who is eligible?              │
   └───────────────────────────────┘

   ┌───────────────────────────────┐
   │ What documents do I need?     │
   └───────────────────────────────┘
```

---

# 28. CHAT HISTORY

There should be **one continuous conversation**.

Do not create:

- Conversation sidebar
- Chat list
- New chat button
- Multiple rooms
- Groups
- Contact list

If persistence is implemented, simply restore the previous conversation when the user returns.

Optionally provide:

**Clear conversation**

inside a minimal menu.

---

# 29. MOBILE HEADER BEHAVIOUR

The header should remain visible while chatting.

On mobile:

- Compact height.
- Bot avatar approximately 40px.
- Name clearly visible.
- Status underneath or beside the name.
- Minimal action menu.

Do not consume excessive vertical space.

---

# 30. DESKTOP HEADER BEHAVIOUR

Desktop may have slightly more breathing room, but retain the same visual hierarchy.

Example:

```text
┌───────────────────────────────────────────┐
│  [Avatar]  Legal Services Assistant       │
│            Online                          │
│                                      ⋮    │
└───────────────────────────────────────────┘
```

---

# 31. MICROCOPY

Use simple, citizen-friendly language.

Prefer:

**Ask a question**

instead of:

**Enter query**

Prefer:

**How can I help you?**

instead of:

**Select an operation**

Prefer:

**Try asking**

instead of:

**Suggested queries**

Avoid unnecessary technical terminology.

---

# 32. ERROR / NETWORK STATES

Design graceful states for:

- Network unavailable
- API timeout
- Bot unavailable
- Empty response
- Server error
- Invalid request
- Rate limiting

The UI should explain the problem in simple language.

Never expose:

- Stack traces
- Database errors
- API errors
- Internal IDs
- Developer messages

to the user.

---

# 33. LOADING EXPERIENCE

Do not display a full-page loading screen for normal bot responses.

Use:

**Typing indicator → bot response**

This keeps the experience conversational.

For initial application loading, use a minimal skeleton/loading state.

---

# 34. DESIGN SYSTEM

Build the UI using reusable design tokens/components.

Define centralized:

- Colors
- Typography
- Spacing
- Border radius
- Shadows
- Breakpoints
- Transitions
- Message styles
- Button styles
- Input styles

Avoid styling individual screens independently.

---

# 35. COMPONENT STRUCTURE

The UI should conceptually be divided into reusable components such as:

```text
ChatApplication
├── ChatHeader
│   ├── BotAvatar
│   ├── BotIdentity
│   └── ChatMenu
│
├── ChatArea
│   ├── DateSeparator
│   ├── MessageList
│   │   ├── BotMessage
│   │   ├── UserMessage
│   │   ├── TypingIndicator
│   │   └── ErrorMessage
│   │
│   └── SuggestedQuestions
│
└── MessageComposer
    ├── TextInput
    └── SendButton
```

Keep components reusable and maintainable.

---

# 36. CHAT MESSAGE DATA MODEL

The visual system should be capable of rendering messages from structured data.

Conceptually:

```text
message
├── id
├── sender
├── content
├── timestamp
├── messageType
├── status
├── actions
└── metadata
```

Possible sender values:

- `bot`
- `user`

Possible message types:

- `text`
- `rich_text`
- `options`
- `error`
- `system`

This should allow the backend/API to evolve without requiring major UI redesign.

---

# 37. UX RULES

Follow these rules strictly:

1. The user should understand the application within seconds.
2. The conversation is always the primary UI.
3. Never overwhelm the user with controls.
4. Keep the input composer immediately accessible.
5. Suggested questions should help users discover capabilities.
6. Bot responses should be easy to scan.
7. Long legal information must be broken into readable sections.
8. Maintain consistent message spacing.
9. Never make the interface look like an admin dashboard.
10. Never introduce unnecessary screens.
11. Keep interactions conversational.
12. Prioritize mobile usability.
13. Maintain accessibility.
14. Keep the visual design professional enough for an official legal-services platform.

---

# 38. WHATSAPP-INSPIRED, NOT A WHATSAPP CLONE

Use WhatsApp only as **UX inspiration** for:

- Message alignment
- Chat composition
- Conversation flow
- Header structure
- Message timestamps
- Typing indicator
- Chat scrolling
- Familiar messaging interaction patterns

Do NOT copy:

- WhatsApp logo
- WhatsApp name
- Exact icons
- Exact wallpaper
- Exact colors
- Exact proprietary visual assets
- Exact UI screenshots
- WhatsApp branding

The final product must have its **own visual identity**.

---

# 39. FINAL DESIGN TARGET

The final interface should give the user the immediate impression:

> "This is a simple, official legal-services chat where I can ask questions and get help."

It should combine:

**WhatsApp-like familiarity + government-service professionalism + modern AI assistant usability.**

The final UI should be polished enough to be considered a production-ready citizen-facing application, not a prototype or generic chatbot template.