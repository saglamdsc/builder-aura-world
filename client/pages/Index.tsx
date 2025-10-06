import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, ArrowRight, Brain, Database, FlaskConical } from "lucide-react";

export default function Index() {
  return (
    <div className="bg-background">
      {/* Hero */}
      <section id="hero" className="relative border-b">
        <div className="absolute inset-0 bg-[radial-gradient(40%_30%_at_70%_10%,hsl(var(--accent)/0.15),transparent)]" />
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20 md:py-28">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
                Jeolojik Veriden Yapay Zeka Destekli Çözümlere
              </h1>
              <p className="mt-4 max-w-prose text-base leading-relaxed text-muted-foreground">
                MagmAI, jeolojik ve sondaj verilerini gelişmiş yapay zekâ algoritmalarıyla analiz eder. Gerçek zamanlı yeraltı modellemeleriyle petrol, gaz ve jeotermal sektörlerinde operasyonel verimliliği artırır.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                  <a href="#solutions" aria-label="Çözümlerimizi inceleyin">
                    Çözümlerimizi İnceleyin
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <a href="#contact" aria-label="İletişime geçin">
                    İletişime Geç
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="mx-auto h-56 w-56 md:h-72 md:w-72 rounded-[28%] border-2 border-accent/40 bg-accent/10 shadow-[0_8px_40px_-12px_hsl(var(--accent)/0.45)]" />
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="scroll-mt-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-24">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground">MagmAI Hakkında</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Jeoloji ve yapay zekayı bir araya getirerek gerçek zamanlı yeraltı içgörüleri sunuyoruz. Hedefimiz, yorumlamayı daha hızlı, daha akıllı ve saha operasyonlarına daha bağlı hale getirmek.
              </p>
            </div>
            <ul className="grid grid-cols-3 gap-4">
              <li className="flex flex-col items-center rounded-lg border bg-card p-4 text-center">
                <FlaskConical className="h-6 w-6 text-accent" />
                <span className="mt-2 text-sm font-medium">Jeoloji</span>
              </li>
              <li className="flex flex-col items-center rounded-lg border bg-card p-4 text-center">
                <Brain className="h-6 w-6 text-accent" />
                <span className="mt-2 text-sm font-medium">Yapay Zeka</span>
              </li>
              <li className="flex flex-col items-center rounded-lg border bg-card p-4 text-center">
                <Database className="h-6 w-6 text-accent" />
                <span className="mt-2 text-sm font-medium">Veri</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section id="solutions" className="scroll-mt-24 bg-[hsl(var(--secondary)/0.4)]/40">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">Çözümlerimiz</h2>
            <p className="mt-3 text-muted-foreground">Akıllı jeolojik çözümler için yapay zeka destekli araçlar</p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "NovaFacies",
                desc: "Log ve gaz verilerinden AI tabanlı litoloji ve fasiyes tanıma",
              },
              {
                title: "NovaMech",
                desc: "Gerçek zamanlı jeomekanik zekâ ve kırılganlık tahmini",
              },
              {
                title: "NovaGas",
                desc: "Rezervuar analizi ve kaçak tespiti için ileri gaz analitiği",
              },
            ].map((item) => (
              <Card key={item.title} className="group">
                <CardHeader>
                  <CardTitle className="text-foreground">{item.title}</CardTitle>
                  <CardDescription>{item.desc}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="link" className="px-0 text-accent">
                    <a href="#contact" aria-label={`${item.title} için iletişime geç`}>
                      Detay ve Demo İste <ArrowRight className="ml-1 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="scroll-mt-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">Saha Hizmetleri</h2>
            <p className="mt-3 text-muted-foreground">AI destekli saha jeologlar��yla doğru ve hızlı değerlendirme</p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Saha Jeolog Desteği",
                desc: "Deneyimli jeologlar ile denetim, litoloji değerlendirme ve raporlama",
              },
              {
                title: "Yerinde Veri Entegrasyonu",
                desc: "Kuyu, sondaj ve litolojik verilerin gerçek zamanlı analizi",
              },
              {
                title: "Raporlama ve Kalite",
                desc: "Günlük raporlar, özetler ve veri kalitesi kontrolü",
              },
            ].map((item) => (
              <Card key={item.title}>
                <CardHeader>
                  <CardTitle className="text-foreground">{item.title}</CardTitle>
                  <CardDescription>{item.desc}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="link" className="px-0 text-accent">
                    <a href="#contact">Teklif Al</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-24 border-t bg-secondary/30">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-24">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground">Bize Ulaşın</h2>
              <p className="mt-3 text-muted-foreground">
                Sorularınız için e‑posta veya telefon üzerinden hızlıca iletişime geçin.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                  <a href="mailto:contact@magmai.tech" aria-label="E-posta gönder">
                    <Mail className="mr-2 h-4 w-4" /> contact@magmai.tech
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <a href="tel:+905051306623" aria-label="Telefon aç">
                    <Phone className="mr-2 h-4 w-4" /> +90 505 130 66 23
                  </a>
                </Button>
              </div>
            </div>
            <div className="mx-auto h-40 w-40 md:h-56 md:w-56 rounded-2xl border-2 border-primary/30 bg-gradient-to-br from-primary/10 to-transparent" />
          </div>
        </div>
      </section>
    </div>
  );
}
