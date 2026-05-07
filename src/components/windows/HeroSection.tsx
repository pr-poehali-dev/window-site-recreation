import Icon from "@/components/ui/icon";
import { SERVICES } from "./data";

export default function HeroSection() {
  return (
    <>
      {/* HERO */}
      <section id="hero" className="relative min-h-screen hero-gradient flex items-center overflow-hidden pt-16">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute animate-float" style={{ top: '10%', right: '8%', width: 300, height: 300, background: 'radial-gradient(circle, rgba(0,112,243,0.25) 0%, transparent 70%)', borderRadius: '50%' }} />
          <div className="absolute animate-float-delay" style={{ bottom: '20%', left: '5%', width: 200, height: 200, background: 'radial-gradient(circle, rgba(0,212,170,0.2) 0%, transparent 70%)', borderRadius: '50%' }} />
          <div className="absolute animate-pulse-slow" style={{ top: '50%', left: '50%', width: 600, height: 600, background: 'radial-gradient(circle, rgba(0,112,243,0.08) 0%, transparent 70%)', borderRadius: '50%', transform: 'translate(-50%, -50%)' }} />
          <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(0,112,243,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,112,243,0.05) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
          {[{ top: '15%', left: '65%', size: 120, delay: '0s' }, { top: '55%', left: '75%', size: 80, delay: '1.5s' }, { top: '30%', left: '85%', size: 60, delay: '3s' }].map((shape, i) => (
            <div key={i} className="absolute hidden lg:block" style={{ top: shape.top, left: shape.left, width: shape.size, height: shape.size, border: '2px solid rgba(0,212,170,0.3)', borderRadius: 8, animation: `float 6s ease-in-out ${shape.delay} infinite`, transform: 'rotate(15deg)' }} />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 animate-fade-in-up" style={{ background: 'rgba(0,212,170,0.15)', border: '1px solid rgba(0,212,170,0.3)' }}>
                <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#00D4AA' }} />
                <span className="text-sm font-medium" style={{ color: '#00D4AA' }}>Производство и установка с 2005 года</span>
              </div>

              <h1 className="font-oswald text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 animate-fade-in-up-delay-1">
                ОКНА <br />
                <span className="gradient-text">НОВОГО</span> <br />
                ПОКОЛЕНИЯ
              </h1>

              <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-lg animate-fade-in-up-delay-2">
                Производим и устанавливаем пластиковые окна от 1 дня. Бесплатный замер, гарантия 5 лет, собственное производство в Москве.
              </p>

              <div className="flex flex-wrap gap-4 mb-10 animate-fade-in-up-delay-2">
                <a href="#calculator" className="btn-primary px-8 py-4 rounded-2xl text-base text-white flex items-center gap-2">
                  <Icon name="Calculator" size={18} />
                  Рассчитать стоимость
                </a>
                <a href="#contacts" className="btn-outline-white px-8 py-4 rounded-2xl text-base flex items-center gap-2">
                  <Icon name="Phone" size={18} />
                  Бесплатный замер
                </a>
              </div>

              <div className="grid grid-cols-3 gap-6 animate-fade-in-up-delay-3">
                {[{ num: "18+", label: "лет опыта" }, { num: "12 000+", label: "объектов" }, { num: "5 лет", label: "гарантии" }].map((stat) => (
                  <div key={stat.label}>
                    <div className="font-oswald text-3xl font-bold gradient-text">{stat.num}</div>
                    <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="hidden lg:block relative animate-fade-in-up-delay-2">
              <div className="relative rounded-3xl overflow-hidden glow-blue" style={{ transform: 'perspective(1000px) rotateY(-8deg) rotateX(4deg)' }}>
                <img src="https://cdn.poehali.dev/projects/d8f18ce7-8e2e-4b51-a324-f769b885c3d8/files/637b084d-dfc8-4941-8534-1a4aed04edac.jpg" alt="Окна" className="w-full h-[520px] object-cover" />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(0,112,243,0.2) 0%, transparent 60%)' }} />
                <div className="absolute bottom-6 left-6 glass-card p-4 rounded-2xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #0070F3, #00D4AA)' }}>
                      <Icon name="CheckCircle" size={20} className="text-white" />
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm">Установка от 1 дня</div>
                      <div className="text-gray-300 text-xs">Замер бесплатно</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in-up-delay-3">
          <div className="text-gray-400 text-xs">Листайте вниз</div>
          <div className="w-5 h-9 rounded-full border-2 border-gray-600 flex items-start justify-center p-1.5">
            <div className="w-1 h-2 rounded-full bg-white animate-bounce" />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden">
                <img src="https://cdn.poehali.dev/projects/d8f18ce7-8e2e-4b51-a324-f769b885c3d8/files/8077a28c-5a4e-4654-9b1a-7e3993cb9282.jpg" alt="Команда" className="w-full h-[480px] object-cover" />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,112,243,0.15) 0%, transparent 60%)' }} />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-5 shadow-2xl" style={{ border: '1px solid rgba(0,112,243,0.1)' }}>
                <div className="font-oswald text-4xl font-bold gradient-text">12 000+</div>
                <div className="text-gray-500 text-sm mt-1">установленных окон</div>
              </div>
            </div>

            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ background: 'rgba(0,112,243,0.08)', border: '1px solid rgba(0,112,243,0.2)' }}>
                <Icon name="Building" size={14} style={{ color: '#0070F3' }} />
                <span className="text-sm font-medium" style={{ color: '#0070F3' }}>О компании</span>
              </div>

              <h2 className="font-oswald text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                НАДЁЖНЫЙ ПАРТНЁР <br />
                <span className="gradient-text">С 2005 ГОДА</span>
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                ОкнаПро — российский производитель пластиковых окон с собственным заводом в Москве. Мы контролируем каждый этап: от производства профиля до финальной установки и сервисного обслуживания.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: "Factory", title: "Своё производство", desc: "Завод 4 500 м² в Москве" },
                  { icon: "Award", title: "Сертификаты ГОСТ", desc: "Вся продукция сертифицирована" },
                  { icon: "Users", title: "150+ сотрудников", desc: "Опытная команда монтажников" },
                  { icon: "Truck", title: "Своя доставка", desc: "Доставляем в день заказа" },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3 p-4 rounded-xl" style={{ background: 'rgba(0,112,243,0.05)' }}>
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(135deg, #0070F3, #00D4AA)' }}>
                      <Icon name={item.icon} size={16} className="text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">{item.title}</div>
                      <div className="text-gray-500 text-xs mt-0.5">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <a href="#contacts" className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-white">
                <Icon name="Phone" size={18} />
                Связаться с нами
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24" style={{ background: '#F8FAFF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4" style={{ background: 'rgba(0,112,243,0.08)', border: '1px solid rgba(0,112,243,0.2)' }}>
              <Icon name="Wrench" size={14} style={{ color: '#0070F3' }} />
              <span className="text-sm font-medium" style={{ color: '#0070F3' }}>Наши услуги</span>
            </div>
            <h2 className="font-oswald text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              ВСЁ ДЛЯ ВАШЕГО <span className="gradient-text">ОСТЕКЛЕНИЯ</span>
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">Полный спектр услуг — от производства до установки и сервисного обслуживания</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => (
              <div key={service.title} className="bg-white rounded-2xl p-6 card-hover cursor-pointer group" style={{ border: '1px solid rgba(0,0,0,0.06)', boxShadow: '0 2px 16px rgba(0,0,0,0.04)' }}>
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110" style={{ background: `${service.color}18` }}>
                  <Icon name={service.icon} size={22} style={{ color: service.color }} />
                </div>
                <h3 className="font-oswald text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{service.desc}</p>
                <div className="mt-4 flex items-center gap-1 text-sm font-medium" style={{ color: service.color }}>
                  <span>Подробнее</span>
                  <Icon name="ArrowRight" size={14} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
