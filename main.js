// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Quote form: earliest pickup date is today, submit to Formspree without leaving the page
(function () {
  const form = document.getElementById("quote-form");
  if (!form) return;

  const status = document.getElementById("form-status");
  const button = form.querySelector('button[type="submit"]');
  const date = form.querySelector("#preferred_date");

  const now = new Date();
  date.min = new Date(now.getTime() - now.getTimezoneOffset() * 60000).toISOString().slice(0, 10);

  // Digits only in ZIP / year fields
  form.querySelectorAll('input[inputmode="numeric"]').forEach((el) => {
    el.addEventListener("input", () => { el.value = el.value.replace(/\D/g, ""); });
  });

  function setStatus(msg, kind) {
    status.textContent = msg;
    status.className = "form-status" + (kind ? " is-" + kind : "");
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    if (form.action.includes("%5B") || form.action.includes("[")) {
      setStatus("Form not connected yet: add your Formspree form ID in index.html.", "error");
      return;
    }

    button.disabled = true;
    setStatus("Sending…");

    try {
      const res = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        form.reset();
        setStatus("Thanks! Your quote request was sent. We’ll be in touch soon.", "ok");
      } else {
        const data = await res.json().catch(() => ({}));
        const msg = data.errors ? data.errors.map((x) => x.message).join(", ") : "";
        setStatus("Sorry, something went wrong" + (msg ? ": " + msg : "") + ". Please call us instead.", "error");
      }
    } catch {
      setStatus("Network error. Please try again or call us.", "error");
    } finally {
      button.disabled = false;
    }
  });
})();
