export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const {
      nps,
      q2,
      q3,
      q4,
      q5,
      q6,
      freeText,
      timestamp
    } = req.body;

    // 🔎 validação básica (evita lixo)
    if (nps === undefined) {
      return res.status(400).json({ error: "NPS é obrigatório" });
    }

    // 🧠 estrutura final do dado (organizado)
    const submission = {
      nps: Number(nps),

      experiencia_uso: q2 || null,
      credibilidade: q3 || null,
      design: q4 || null,
      motivo_compra: q5 || [],
      friccao: q6 || null,

      comentario: freeText || "",

      meta: {
        timestamp: timestamp || new Date().toISOString(),
        userAgent: req.headers["user-agent"] || null,
        ip: req.headers["x-forwarded-for"] || req.socket.remoteAddress
      }
    };

    // 🧪 log (Vercel Functions → aparece nos logs)
    console.log("📩 Nova resposta recebida:", submission);

    // 💾 FUTURO: aqui você conecta banco (Vercel KV, Supabase, etc.)
    // await kv.lpush("neon-burger-surveys", submission);

    return res.status(200).json({
      success: true,
      message: "Resposta recebida com sucesso"
    });

  } catch (error) {
    console.error("Erro no form:", error);

    return res.status(500).json({
      error: "Erro interno ao processar formulário"
    });
  }
}