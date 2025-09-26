import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function ContactInfo() {
  return (
    <section className="py-16 bg-sage/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-light text-foreground mb-4">Other Ways to Connect</h2>
            <p className="text-muted-foreground leading-relaxed">
              Choose the method that feels most comfortable for you
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Local Pickup */}
            <Card className="border-sage/20 hover:border-sage/40 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-sage/20 rounded-full">
                    <MapPin className="h-6 w-6 text-sage" />
                  </div>
                </div>
                <h3 className="font-medium text-foreground mb-2">Local Pickup</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Available in select areas. Contact us to arrange a convenient pickup location.
                </p>
              </CardContent>
            </Card>

            {/* Phone */}
            <Card className="border-sage/20 hover:border-sage/40 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-mauve/20 rounded-full">
                    <Phone className="h-6 w-6 text-mauve" />
                  </div>
                </div>
                <h3 className="font-medium text-foreground mb-2">Phone</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  For immediate assistance with orders or product guidance.
                </p>
              </CardContent>
            </Card>

            {/* Email */}
            <Card className="border-sage/20 hover:border-sage/40 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-sage/20 rounded-full">
                    <Mail className="h-6 w-6 text-sage" />
                  </div>
                </div>
                <h3 className="font-medium text-foreground mb-2">Email</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  hello@niraessentials.com
                  <br />
                  We respond within 24 hours
                </p>
              </CardContent>
            </Card>

            {/* Response Time */}
            <Card className="border-sage/20 hover:border-sage/40 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-mauve/20 rounded-full">
                    <Clock className="h-6 w-6 text-mauve" />
                  </div>
                </div>
                <h3 className="font-medium text-foreground mb-2">Response Time</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We typically respond within 24 hours, Monday through Friday.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Additional Info */}
          <div className="mt-12 text-center">
            <Card className="border-sage/20 bg-background/50">
              <CardContent className="p-8">
                <h3 className="text-xl font-serif font-light text-foreground mb-4">From Our Hands to Your Home</h3>
                <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                  Every inquiry is personally reviewed by our founder. We believe in building meaningful connections
                  with our community and are here to support your journey toward natural wellness with personalized care
                  and attention.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
