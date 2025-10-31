import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });

  const services = [
    {
      icon: 'Wrench',
      title: 'Диагностика двигателей',
      description: 'Полная компьютерная диагностика электродвигателей с выявлением всех неисправностей',
      price: 'от 3 000 ₽'
    },
    {
      icon: 'Battery',
      title: 'Ремонт и замена обмоток',
      description: 'Перемотка статора и ротора, замена изоляции, балансировка',
      price: 'от 15 000 ₽'
    },
    {
      icon: 'Zap',
      title: 'Ремонт инверторов',
      description: 'Восстановление силовых модулей, замена конденсаторов, прошивка',
      price: 'от 8 000 ₽'
    },
    {
      icon: 'Settings',
      title: 'Профилактика и ТО',
      description: 'Регулярное обслуживание для продления срока службы двигателя',
      price: 'от 5 000 ₽'
    },
    {
      icon: 'Gauge',
      title: 'Балансировка ротора',
      description: 'Точная балансировка для устранения вибраций и шума',
      price: 'от 4 500 ₽'
    },
    {
      icon: 'Cable',
      title: 'Замена подшипников',
      description: 'Установка качественных подшипников, проверка посадочных мест',
      price: 'от 6 000 ₽'
    }
  ];

  const portfolio = [
    {
      title: 'Tesla Model 3',
      description: 'Полная перемотка статора, восстановление изоляции',
      image: 'https://cdn.poehali.dev/projects/f77d5e62-cac3-43df-8f2f-8e01b31e7a1d/files/156e8ba3-bad3-4183-9f10-6bc27c828755.jpg'
    },
    {
      title: 'Nissan Leaf',
      description: 'Ремонт инвертора, замена силовых модулей IGBT',
      image: 'https://cdn.poehali.dev/projects/f77d5e62-cac3-43df-8f2f-8e01b31e7a1d/files/40f7f42f-f93f-4e3b-9a56-ad3ec69fa216.jpg'
    },
    {
      title: 'BMW i3',
      description: 'Диагностика и устранение посторонних шумов двигателя',
      image: 'https://cdn.poehali.dev/projects/f77d5e62-cac3-43df-8f2f-8e01b31e7a1d/files/c878a040-6e84-46f1-8b36-b0a972c07898.jpg'
    }
  ];

  const faqs = [
    {
      question: 'Сколько времени занимает ремонт?',
      answer: 'В среднем 3-7 рабочих дней в зависимости от сложности. Экспресс-диагностика проводится за 1 день.'
    },
    {
      question: 'Какая гарантия на работы?',
      answer: 'Даем гарантию 12 месяцев на все виды ремонта и 6 месяцев на запчасти.'
    },
    {
      question: 'Работаете с какими марками авто?',
      answer: 'Работаем со всеми электромобилями: Tesla, Nissan, BMW, Chevrolet, Renault, Hyundai, Kia и другими.'
    },
    {
      question: 'Есть ли эвакуатор?',
      answer: 'Да, предоставляем услуги эвакуатора для доставки автомобиля в сервис. Стоимость от 2000 ₽.'
    },
    {
      question: 'Можно ли присутствовать при ремонте?',
      answer: 'Конечно! Мы работаем прозрачно и всегда рады показать процесс ремонта.'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Zap" className="text-primary" size={32} />
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              ElectroMotor
            </span>
          </div>
          <div className="hidden md:flex gap-6">
            <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
            <a href="#price" className="hover:text-primary transition-colors">Прайс</a>
            <a href="#portfolio" className="hover:text-primary transition-colors">Портфолио</a>
            <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
            <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button className="bg-gradient-to-r from-primary to-secondary">
            <Icon name="Phone" size={18} className="mr-2" />
            +7 (999) 123-45-67
          </Button>
        </div>
      </nav>

      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/5 via-white to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <Badge className="bg-gradient-to-r from-primary to-secondary text-white">
                Профессиональный ремонт с 2015 года
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Ремонт электродвигателей 
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> автомобилей</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Восстанавливаем электродвигатели Tesla, Nissan, BMW и других электромобилей. 
                Гарантия 12 месяцев. Диагностика за 1 день.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                  <Icon name="Calendar" size={20} className="mr-2" />
                  Записаться на диагностику
                </Button>
                <Button size="lg" variant="outline">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Позвонить сейчас
                </Button>
              </div>
              <div className="flex gap-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Отремонтировано</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">9.8/10</div>
                  <div className="text-sm text-muted-foreground">Оценка клиентов</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">12 мес</div>
                  <div className="text-sm text-muted-foreground">Гарантия</div>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/f77d5e62-cac3-43df-8f2f-8e01b31e7a1d/files/156e8ba3-bad3-4183-9f10-6bc27c828755.jpg"
                alt="Ремонт электродвигателей"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
                <Icon name="Award" className="text-secondary mb-2" size={32} />
                <div className="font-bold">Сертифицирован</div>
                <div className="text-sm text-muted-foreground">ISO 9001:2015</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4 bg-primary/10 text-primary">Наши услуги</Badge>
            <h2 className="text-4xl font-bold mb-4">Полный спектр работ</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              От диагностики до капитального ремонта. Работаем с любыми неисправностями электродвигателей.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-all hover:-translate-y-1 border-2 hover:border-primary/50">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                    <Icon name={service.icon as any} className="text-white" size={24} />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{service.price}</span>
                    <Button variant="ghost" size="sm">
                      Подробнее <Icon name="ArrowRight" size={16} className="ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="price" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-secondary/10 text-secondary">Прозрачные цены</Badge>
            <h2 className="text-4xl font-bold mb-4">Прайс-лист</h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <div className="space-y-4">
                  {[
                    { name: 'Диагностика электродвигателя', price: '3 000 ₽' },
                    { name: 'Перемотка статора', price: '15 000 - 25 000 ₽' },
                    { name: 'Ремонт инвертора', price: '8 000 - 20 000 ₽' },
                    { name: 'Замена подшипников', price: '6 000 - 10 000 ₽' },
                    { name: 'Балансировка ротора', price: '4 500 ₽' },
                    { name: 'Профилактическое ТО', price: '5 000 ₽' },
                    { name: 'Эвакуатор (по городу)', price: 'от 2 000 ₽' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center py-3 border-b last:border-0">
                      <span className="font-medium">{item.name}</span>
                      <span className="text-primary font-bold">{item.price}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg">
                  <div className="flex items-start gap-3">
                    <Icon name="Info" className="text-primary mt-1" size={20} />
                    <div>
                      <div className="font-semibold mb-2">Итоговая стоимость зависит от:</div>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Модели электромобиля и типа двигателя</li>
                        <li>• Характера и сложности неисправности</li>
                        <li>• Необходимости замены комплектующих</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary">Наши работы</Badge>
            <h2 className="text-4xl font-bold mb-4">Портфолио</h2>
            <p className="text-muted-foreground">Примеры успешно выполненных ремонтов</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {portfolio.map((item, idx) => (
              <Card key={idx} className="overflow-hidden hover:shadow-xl transition-shadow">
                <img 
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="CheckCircle2" className="text-green-500" size={20} />
                    {item.title}
                  </CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-accent via-accent/95 to-primary/20 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-white/20 text-white border-0">Наши гарантии</Badge>
              <h2 className="text-4xl font-bold mb-6">Почему выбирают нас</h2>
              <div className="space-y-4">
                {[
                  { icon: 'Shield', title: 'Гарантия 12 месяцев', desc: 'На все виды ремонтных работ' },
                  { icon: 'Clock', title: 'Быстрая диагностика', desc: 'Определяем проблему за 1 день' },
                  { icon: 'Users', title: 'Опытные мастера', desc: 'Более 8 лет работы с электромобилями' },
                  { icon: 'Wrench', title: 'Оригинальные запчасти', desc: 'Только качественные комплектующие' }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-start bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                    <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                      <Icon name={item.icon as any} size={20} />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">{item.title}</div>
                      <div className="text-sm text-white/80">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
              <Icon name="Award" size={64} className="mb-4 text-secondary" />
              <h3 className="text-2xl font-bold mb-4">Сертифицированный сервис</h3>
              <p className="text-white/90 mb-6">
                Наш сервис имеет все необходимые сертификаты и лицензии для работы 
                с высоковольтным оборудованием электромобилей. Мы регулярно проходим 
                обучение у производителей Tesla, Nissan и BMW.
              </p>
              <div className="flex gap-4">
                <Badge className="bg-white/20 text-white border-0">ISO 9001</Badge>
                <Badge className="bg-white/20 text-white border-0">Tesla Certified</Badge>
                <Badge className="bg-white/20 text-white border-0">EV Specialist</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-secondary/10 text-secondary">Ответы на вопросы</Badge>
            <h2 className="text-4xl font-bold mb-4">Часто задаваемые вопросы</h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`} className="border rounded-lg px-6 bg-white shadow-sm">
                  <AccordionTrigger className="text-left font-semibold hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-primary/10 text-primary">Свяжитесь с нами</Badge>
              <h2 className="text-4xl font-bold mb-4">Запишитесь на диагностику</h2>
              <p className="text-muted-foreground">Оставьте заявку и мы перезвоним в течение 15 минут</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Контактная информация</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Icon name="MapPin" className="text-primary mt-1" size={20} />
                    <div>
                      <div className="font-semibold">Адрес</div>
                      <div className="text-muted-foreground">г. Москва, ул. Электрическая, д. 15</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Phone" className="text-primary mt-1" size={20} />
                    <div>
                      <div className="font-semibold">Телефон</div>
                      <div className="text-muted-foreground">+7 (999) 123-45-67</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Mail" className="text-primary mt-1" size={20} />
                    <div>
                      <div className="font-semibold">Email</div>
                      <div className="text-muted-foreground">info@electromotor.ru</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Clock" className="text-primary mt-1" size={20} />
                    <div>
                      <div className="font-semibold">Режим работы</div>
                      <div className="text-muted-foreground">Пн-Пт: 9:00 - 20:00<br/>Сб-Вс: 10:00 - 18:00</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Форма обратной связи</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Input 
                        placeholder="Ваше имя"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <Input 
                        type="tel"
                        placeholder="Телефон"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <Textarea 
                        placeholder="Опишите проблему с автомобилем"
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        rows={4}
                      />
                    </div>
                    <Button type="submit" className="w-full bg-gradient-to-r from-primary to-secondary">
                      <Icon name="Send" size={18} className="mr-2" />
                      Отправить заявку
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-accent text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Zap" size={24} />
                <span className="text-xl font-bold">ElectroMotor</span>
              </div>
              <p className="text-white/70 text-sm">
                Профессиональный ремонт электродвигателей автомобилей с 2015 года
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>Диагностика</li>
                <li>Ремонт обмоток</li>
                <li>Ремонт инверторов</li>
                <li>Профилактика</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>О нас</li>
                <li>Гарантии</li>
                <li>Портфолио</li>
                <li>Контакты</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>+7 (999) 123-45-67</li>
                <li>info@electromotor.ru</li>
                <li>г. Москва, ул. Электрическая, 15</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-sm text-white/50">
            © 2024 ElectroMotor. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
