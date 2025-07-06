async function sendMessage() {
  const input = document.getElementById("userInput");
  const chatBox = document.getElementById("chatBox");
  const message = input.value.trim();
  if (!message) return;

  chatBox.innerHTML += `<p><strong>You:</strong> ${message}</p>`;
  input.value = "";

  try {
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message })
    });

    const data = await res.json();
    chatBox.innerHTML += `<p><strong>Bot:</strong> ${data.reply}</p>`;
    chatBox.scrollTop = chatBox.scrollHeight;
  } catch (err) {
    chatBox.innerHTML += `<p style="color:red;"><strong>Error:</strong> ${err.message}</p>`;
  }
}
