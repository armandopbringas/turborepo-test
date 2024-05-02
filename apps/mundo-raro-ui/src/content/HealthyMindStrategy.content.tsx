interface Strategy {
  symbol: string;
  subtitle: string;
  text: string;
}

export const strategies: Strategy[] = [
  {
    symbol: "🏃🏽‍♀️",
    subtitle: "Establece una rutina saludable",
    text: "Crea una estructura diaria que te brinde equilibrio y bienestar. Incluye tiempo para el descanso, la alimentación saludable y las actividades que disfrutes.",
  },
  {
    symbol: "🧘🏽",
    subtitle: "Practica técnicas de relajación",
    text: "Aprende técnicas como la meditación, la respiración profunda o el yoga para reducir el estrés y promover la calma.",
  },
  {
    symbol: "🤝🏽",
    subtitle: "Mantén relaciones sociales saludables",
    text: "El apoyo social es fundamental para la salud mental. Cultiva relaciones positivas con amigos y familiares.",
  },
];
