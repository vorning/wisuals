import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    // Tag sidste besked fra brugeren
    const lastMessage = messages[messages.length - 1];
    const userInput = lastMessage.content.toLowerCase();

    // Intelligent response logic
    const response = getSmartResponse(userInput);

    // Simuler "thinking" delay for realisme
    await new Promise((resolve) => setTimeout(resolve, 800));

    return NextResponse.json({ message: response });
  } catch (error) {
    console.error("Chat error:", error);
    return NextResponse.json({ error: "Noget gik galt" }, { status: 500 });
  }
}

function getSmartResponse(input: string): string {
  // Pris-relaterede spørgsmål
  if (
    input.includes("pris") ||
    input.includes("koster") ||
    input.includes("price") ||
    input.includes("kr")
  ) {
    return '💰 Vores priser varierer efter projektets kompleksitet:\n\n🌐 Simple websites: fra 15.000 kr\n🛒 E-commerce løsninger: fra 25.000 kr\n🎨 Design & branding: fra 10.000 kr\n📈 SEO & marketing: fra 8.000 kr\n\nVil du have et konkret tilbud? Klik på "Book møde" øverst på siden!';
  }

  // Tid-relaterede spørgsmål
  if (
    input.includes("tid") ||
    input.includes("lang tid") ||
    input.includes("hurtigt") ||
    input.includes("hvor længe")
  ) {
    return "⏱️ Et typisk projekt tager 4-8 uger afhængig af kompleksitet.\n\nVi prioriterer kvalitet over hastighed, men kan tilpasse tidsplanen efter dine behov.\n\nHvad arbejder du med?";
  }

  // Service/ydelser spørgsmål
  if (
    input.includes("service") ||
    input.includes("ydelse") ||
    input.includes("tilbud") ||
    input.includes("lav") ||
    input.includes("hjælpe") ||
    input.includes("kan i")
  ) {
    return "🚀 Vi tilbyder:\n\n🎨 Web udvikling (Next.js, React, WordPress)\n✨ Design & Branding\n🛒 E-commerce løsninger\n📈 SEO & Digital Marketing\n🤖 AI-integration & Chatbots\n\nHvilket område interesserer dig mest?";
  }

  // Teknologi spørgsmål
  if (
    input.includes("teknologi") ||
    input.includes("next") ||
    input.includes("react") ||
    input.includes("wordpress") ||
    input.includes("tech")
  ) {
    return "⚡ Vi arbejder primært med moderne web-teknologier:\n\n• Next.js & React for maksimal performance\n• TypeScript for type-safety\n• Tailwind CSS for fleksibelt design\n• WordPress hvis det passer bedre\n\nAlt bygget med fokus på hastighed og SEO.\n\nHvad foretrækker du?";
  }

  // Portfolio/cases
  if (
    input.includes("case") ||
    input.includes("projekt") ||
    input.includes("portfolio") ||
    input.includes("eksempel") ||
    input.includes("tidligere")
  ) {
    return '📂 Du kan se vores seneste projekt med ProLution i "Cases" sektionen.\n\nVi hjalp dem med at etablere en professionel digital tilstedeværelse, hvilket resulterede i:\n\n✅ Øget online synlighed\n✅ Flere kvalificerede leads\n✅ Professionelt brand-udtryk\n\nVil du se flere eksempler?';
  }

  // Kontakt
  if (
    input.includes("kontakt") ||
    input.includes("møde") ||
    input.includes("ringe") ||
    input.includes("email") ||
    input.includes("skrive")
  ) {
    return "📞 Perfekt! Du kan kontakte os på flere måder:\n\n📅 Book gratis møde (knappen øverst)\n📧 vv@wisuals.dk\n📱 +45 61721123\n\nHvad passer bedst for dig?";
  }

  // Hilsner
  if (input.match(/^(hej|hey|hallo|hi|goddag|hejsa)/)) {
    return "👋 Hej! Dejligt at høre fra dig.\n\nJeg kan hjælpe dig med:\n\n💰 Priser og pakker\n🎨 Vores services\n⏱️ Projekttid\n⚡ Teknologi\n📞 Kontakt\n\nHvad kan jeg hjælpe med?";
  }

  // Tak
  if (
    input.includes("tak") ||
    input.includes("thanks") ||
    input.includes("takker")
  ) {
    return "🙏 Selv tak!\n\nEr der andet jeg kan hjælpe med?\n\nEllers er du altid velkommen til at booke et møde, så vi kan dykke dybere ned i dit projekt 🚀";
  }

  // Hvem er Wisuals
  if (
    input.includes("wisuals") ||
    input.includes("hvem er") ||
    input.includes("om jer") ||
    input.includes("om wisuals")
  ) {
    return "✨ Wisuals er et moderne digitalt bureau specialiseret i skræddersyede web-løsninger.\n\nVi kombinerer:\n\n🎨 Professionelt design\n⚡ Moderne teknologi (Next.js, React)\n👥 Brugercentreret tilgang\n\nVores mission: Hjælpe små og mellemstore virksomheder med at skabe digital tilstedeværelse der performer.\n\nGrundlagt 2024 af Victor Vorning.";
  }

  // AI/Chatbot spørgsmål
  if (
    input.includes("chatbot") ||
    input.includes("ai") ||
    input.includes("kunstig intelligens") ||
    input.includes("bot")
  ) {
    return "🤖 Ja! Vi udvikler AI-integrerede løsninger.\n\nChatbots kan hjælpe dig med at:\n\n⚡ Besvare kundeforespørgsler 24/7\n🎯 Kvalificere leads automatisk\n⏰ Reducere support-tid med 60%\n😊 Forbedre brugeroplevelsen\n\nLigesom denne chatbot du chatter med nu!\n\nVil du høre mere?";
  }

  // SEO spørgsmål
  if (
    input.includes("seo") ||
    input.includes("google") ||
    input.includes("søgemaskine") ||
    input.includes("ranking")
  ) {
    return "📈 SEO er en kernedel af alt vi laver!\n\nVores websites scorer typisk 95+ på Google Lighthouse.\n\nVi sikrer:\n\n⚡ Hurtig loadtid\n📱 Mobile-first design\n🔍 Struktureret data (schema.org)\n✍️ SEO-optimeret indhold\n\nDet giver bedre rankings og flere besøgende!";
  }

  // Responsive/mobil
  if (
    input.includes("mobil") ||
    input.includes("responsive") ||
    input.includes("telefon") ||
    input.includes("tablet")
  ) {
    return "📱 Alle vores websites er fuldt responsive!\n\nDet betyder:\n\n✅ Perfekt på mobil, tablet og desktop\n✅ Mobile-first design approach\n✅ Touch-optimeret navigation\n✅ Hurtig loading på alle enheder\n\n62% af trafik kommer fra mobil i dag, så det er essentielt.";
  }

  // Vedligeholdelse
  if (
    input.includes("vedligehold") ||
    input.includes("opdater") ||
    input.includes("support") ||
    input.includes("hjælp efter")
  ) {
    return "🔧 Vi tilbyder løbende vedligeholdelse og support.\n\nDu kan vælge mellem:\n\n🎯 Pay-as-you-go (betaling per time)\n📦 Månedlig support-pakke\n📚 Træning så du selv kan opdatere\n\nAlle løsninger inkluderer backup og sikkerhedsopdateringer!";
  }

  // WordPress specifikt
  if (
    input.includes("wordpress") ||
    input.includes("woocommerce") ||
    input.includes("cms")
  ) {
    return "📝 Vi arbejder med WordPress når det giver mening!\n\nWordPress er godt til:\n\n✍️ Blogs og content-sites\n🛒 E-commerce (WooCommerce)\n👥 Når du selv vil opdatere indhold\n\nMen vi anbefaler Next.js for:\n\n⚡ Maksimal performance\n🔒 Bedre sikkerhed\n📈 Bedre SEO\n\nHvad passer bedst til dit projekt?";
  }

  // Fallback - generisk svar
  return "🤔 Godt spørgsmål!\n\nFor at give dig det bedste svar vil jeg foreslå vi tager en snak.\n\n📅 Book et gratis møde via knappen øverst\n📧 Eller skriv til vv@wisuals.dk\n\nSå finder vi den perfekte løsning til dig! 💪";
}
