import { Bath, Sparkles, Moon, Sun } from "lucide-react"

const rituals = [
  {
    icon: Bath,
    title: "Evening Foot Soak Ritual",
    duration: "15-20 minutes",
    description:
      "End your day with our lavender foot soak. Add 2-3 tablespoons to warm water, soak your feet, and let the day's stress melt away.",
    steps: [
      "Fill a basin with comfortably warm water",
      "Add 2-3 tablespoons of foot soak blend",
      "Soak feet for 15-20 minutes while breathing deeply",
      "Gently dry and massage with our nourishing foot balm",
    ],
  },
  {
    icon: Sparkles,
    title: "Morning Glow Face Ritual",
    duration: "5-10 minutes",
    description:
      "Start your day with radiant skin using our turmeric face mask. A gentle way to brighten and energize your complexion.",
    steps: [
      "Cleanse face with lukewarm water",
      "Apply a thin layer of turmeric mask",
      "Leave on for 5-10 minutes until slightly dry",
      "Rinse gently and follow with rose water toner",
    ],
  },
  {
    icon: Moon,
    title: "Self-Care Sunday Ritual",
    duration: "30-45 minutes",
    description:
      "Create a spa-like experience at home with our complete body care routine. Perfect for weekly self-care moments.",
    steps: [
      "Begin with a warm shower using our shower oil",
      "Exfoliate gently with our body scrub",
      "Apply face mask while body air-dries",
      "Finish with our nourishing body balm",
    ],
  },
  {
    icon: Sun,
    title: "Daily Mindful Moments",
    duration: "2-3 minutes",
    description:
      "Transform everyday routines into mindful rituals with our aromatherapy products and simple breathing exercises.",
    steps: [
      "Take three deep breaths before applying products",
      "Warm product between palms mindfully",
      "Apply with gentle, circular motions",
      "Take a moment to appreciate the natural fragrance",
    ],
  },
]

export function RitualGuides() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center justify-center">
            <div className="h-px bg-mauve/30 w-12"></div>
            <span className="px-4 text-sm font-medium text-mauve uppercase tracking-wider">Ritual Guides</span>
            <div className="h-px bg-mauve/30 w-12"></div>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-light text-foreground text-balance">
            How to Create Your Perfect Ritual
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Transform your daily routine into meaningful moments of self-care with our simple, step-by-step ritual
            guides.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {rituals.map((ritual, index) => (
            <div key={index} className="bg-mauve-light/5 rounded-2xl p-8 space-y-6 border border-mauve/10">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-mauve/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <ritual.icon className="w-6 h-6 text-mauve" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-serif text-xl font-medium text-foreground">{ritual.title}</h3>
                  <p className="text-sm text-mauve font-medium">{ritual.duration}</p>
                  <p className="text-muted-foreground text-pretty">{ritual.description}</p>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-medium text-foreground">Steps:</h4>
                <ol className="space-y-2">
                  {ritual.steps.map((step, stepIndex) => (
                    <li key={stepIndex} className="flex items-start space-x-3">
                      <span className="w-6 h-6 bg-mauve/20 rounded-full flex items-center justify-center text-xs font-medium text-mauve flex-shrink-0 mt-0.5">
                        {stepIndex + 1}
                      </span>
                      <span className="text-muted-foreground text-sm text-pretty">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
