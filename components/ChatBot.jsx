import { useState, useRef, useEffect } from "react";
import styles from "../styles/ChatBot.module.css";

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hi. I'm Santhosh's assistant. Ask about projects, skills, or experience.",
    },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateReply = (text) => {
    const lower = text.toLowerCase();

    const hasAny = (keywords) => keywords.some(k => lower.includes(k));

    // Greeting
    if (hasAny(["hi", "hello", "hey"])) {
      return "Hey 👀 I'm Leosat's assistant. I reply faster than his OS boots (still under construction).";
    }

    // Who is he
    if (hasAny(["who is he", "who is leosat", "tell me about him"])) {
      return "He's a developer who decided normal apps were boring… so now he builds an entire OS for fun.";
    }

    // Nicknames
    if (hasAny(["nickname", "nick name", "alias", "other name"])) {
      return "He goes by Leosat, Zoro, and FangYugn. Basically sounds like three different boss levels.";
    }

    // Hobby
    if (hasAny(["hobby", "free time", "what he does for fun"])) {
      return "Hobby? Debugging… building OS… and occasionally remembering to exist outside the terminal.";
    }

    // Projects
    if (hasAny([
      "project", "projects", "tell me about project", "tell me about his project",
      "tell me about his projects", "what projects", "show projects"
    ])) {
      return "Projects tab. Includes OS dev, robotics, and experiments that started simple but escalated quickly.";
    }

    // OS Project
    if (hasAny(["os", "operating system", "kernel"])) {
      return "He's building a custom OS. Talking directly to hardware… because why not make life harder?";
    }

    // Skills
    if (hasAny(["skill", "skills", "tech", "stack"])) {
      return "Skills: OS dev, networking, debugging… and breaking things professionally.";
    }

    // GitHub
    if (hasAny(["github", "code", "repo"])) {
      return "GitHub has everything. Clean code… and some 'what was I doing at 2AM' commits.";
    }

    // Robotics / Hackster / Charging
    if (hasAny(["robot", "charging", "hackster"])) {
      return "Yes, he builds robots too. Because OS development alone wasn't chaotic enough.";
    }

    // Resume
    if (hasAny(["resume", "cv"])) {
      return "Resume is available. It keeps growing… unlike his sleep schedule.";
    }

    // Contact
    if (hasAny(["contact", "email", "reach"])) {
      return "Email: leosat2k4@gmail.com. Replies depend on bug difficulty level.";
    }

    // Learning
    if (hasAny(["learn", "study", "how did you"])) {
      return "He learns by breaking things first… then fixing them like nothing happened.";
    }

    // Future / Goals
    if (hasAny(["future", "goal", "plan"])) {
      return "Future plan: finish the OS… or at least make it boot consistently.";
    }

    // Bugs & Errors
    if (hasAny(["bug", "error", "issue"])) {
      return "He fixes bugs daily. Sometimes the bug fights back.";
    }

    // Themes / UI
    if (hasAny(["theme", "design", "ui"])) {
      return "Try 'Find Me' theme. Looks cool. Debugging still looks cooler.";
    }

    // Joke / Funny
    if (hasAny(["joke", "funny"])) {
      return "He fixed a bug once… turns out it created three new ones. Classic upgrade.";
    }

    // Experience / Intern / Job
    if (hasAny(["experience", "intern", "job"])) {
      return "Experience: building real stuff instead of just watching tutorials.";
    }

    // Sleep / Time
    if (hasAny(["sleep", "free time", "time"])) {
      return "Sleep is optional. Debugging is permanent.";
    }

    // Motivation / Why / Inspire
    if (hasAny(["motivation", "why", "inspire"])) {
      return "Motivation: curiosity… and refusing to give up after breaking everything.";
    }

    // Default fallback
    return "Interesting question. He's either building it, fixing it, or accidentally breaking it right now.";
  };

  const sendMessage = () => {
    if (!input.trim()) return;

    const updatedMessages = [
      ...messages,
      { role: "user", content: input },
    ];

    const reply = generateReply(input);

    setMessages([
      ...updatedMessages,
      { role: "assistant", content: reply },
    ]);

    setInput("");
  };

  return (
    <>
      <div className={styles.floatingButton} onClick={() => setOpen(!open)}>
        🧠
      </div>

      <div className={`${styles.chatBox} ${open ? styles.open : ""}`}>
        <div className={styles.header}>🐦 Code Assistant</div>

        <div className={styles.messages}>
          {messages.map((msg, i) => (
            <div
              key={i}
              className={msg.role === "user" ? styles.userMessage : styles.botMessage}
            >
              {msg.content}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        <div className={styles.inputArea}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about projects..."
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </>
  );
}