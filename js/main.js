const waBase = "https://wa.me/5548991010618";
const wa = (text) => waBase + (text ? ("?text=" + encodeURIComponent(text)) : "");
const bind = (id, href) => { const el = document.getElementById(id); if (el) { el.href = href; el.target = "_blank"; el.rel = "noopener noreferrer"; } };
const msgGeral = "Olá, Reneh! Vim pelo site e gostaria de mais informações sobre os seus serviços.";
bind("cta-nav", wa(msgGeral)); bind("cta-hero", wa(msgGeral)); bind("cta-help", wa(msgGeral)); bind("cta-banner", wa(msgGeral)); bind("cta-phone", wa(msgGeral));
bind("cta-express", wa("Olá, Reneh! Vim pelo site e gostaria de agendar um Tira-Dúvidas Express. Pode me informar os valores e horários disponíveis?"));
bind("cta-consulta", wa("Olá, Reneh! Vim pelo site e tenho interesse em agendar uma Consulta Farmacêutica. Poderia me passar mais informações?"));
bind("cta-acompanhamento", wa("Olá, Reneh! Vim pelo site e gostaria de saber mais sobre o Acompanhamento Farmacoterapêutico. Como funciona?"));
bind("cta-interacoes", wa("Olá, Reneh! Vim pelo site e preciso de uma análise de interações medicamentosas. Como posso prosseguir?"));
document.querySelectorAll('.faq-btn').forEach((btn) => { btn.addEventListener('click', () => { const content = btn.parentElement.querySelector('.faq-content'); const icon = btn.querySelector('[data-lucide="chevron-right"]'); content.classList.toggle('hidden'); icon && icon.classList.toggle('rotate-90'); }); });
// Formulário de contato: monta a mensagem com o que a pessoa digitou e abre o WhatsApp
document.querySelectorAll('form').forEach((form) => form.addEventListener('submit', (e) => {
  e.preventDefault();
  const campo = (nome) => (form.elements[nome] ? form.elements[nome].value.trim() : "");
  const linhas = [`Olá, Reneh! Vim pelo site. Meu nome é ${campo("nome")}.`];
  if (campo("assunto")) linhas.push(`Assunto: ${campo("assunto")}`);
  linhas.push("", campo("mensagem"));
  if (campo("whatsapp")) linhas.push("", `Meu WhatsApp: ${campo("whatsapp")}`);
  window.open(wa(linhas.join("\n")), "_blank", "noopener");
}));
document.getElementById('year').textContent = new Date().getFullYear();
