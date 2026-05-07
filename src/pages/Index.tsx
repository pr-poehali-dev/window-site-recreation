import { useState } from "react";
import Icon from "@/components/ui/icon";

const NAV_LINKS = [
  { label: "Главная", href: "#hero" },
  { label: "О компании", href: "#about" },
  { label: "Услуги", href: "#services" },
  { label: "Портфолио", href: "#portfolio" },
  { label: "Цены", href: "#pricing" },
  { label: "Отзывы", href: "#reviews" },
  { label: "Контакты", href: "#contacts" },
];

const SERVICES = [
  { icon: "LayoutGrid", title: "Пластиковые окна", desc: "Производство и установка ПВХ окон любой конфигурации. Профиль VEKA, Rehau, KBE.", color: "#0070F3" },
  { icon: "Building2", title: "Балконы и лоджии", desc: "Остекление балконов «под ключ». Утепление, внутренняя отделка, вынос.", color: "#00D4AA" },
  { icon: "Layers", title: "Панорамное остекление", desc: "Большие форматы, эркеры, нестандартные проёмы. Стеклопакеты 3–5 камер.", color: "#FF6B35" },
  { icon: "Shield", title: "Ремонт и обслуживание", desc: "Регулировка фурнитуры, замена уплотнителей, устранение продувания.", color: "#7C3AED" },
  { icon: "Sun", title: "Входные группы", desc: "Алюминиевые конструкции для офисов, магазинов, жилых комплексов.", color: "#0070F3" },
  { icon: "Wind", title: "Жалюзи и рольставни", desc: "Подбор и монтаж систем затемнения и защиты от солнца.", color: "#00D4AA" },
];

const PORTFOLIO = [
  { title: "ЖК Северная звезда", type: "Жилой комплекс", windows: 240, img: "https://cdn.poehali.dev/projects/d8f18ce7-8e2e-4b51-a324-f769b885c3d8/files/4d1225f1-8097-4060-997a-c467741d4a75.jpg" },
  { title: "Бизнес-центр Атлас", type: "Коммерческая недвижимость", windows: 580, img: "https://cdn.poehali.dev/projects/d8f18ce7-8e2e-4b51-a324-f769b885c3d8/files/8077a28c-5a4e-4654-9b1a-7e3993cb9282.jpg" },
  { title: "Коттеджный посёлок", type: "Частное строительство", windows: 96, img: "https://cdn.poehali.dev/projects/d8f18ce7-8e2e-4b51-a324-f769b885c3d8/files/637b084d-dfc8-4941-8534-1a4aed04edac.jpg" },
];

const PRICING = [
  {
    name: "Стандарт",
    price: "от 8 900",
    desc: "Оптимальный выбор для квартиры",
    features: ["Профиль VEKA Softline 70", "Двухкамерный стеклопакет", "Гарантия 3 года", "Монтаж включён", "Вывоз мусора"],
    highlight: false,
    color: "#0070F3",
  },
  {
    name: "Комфорт",
    price: "от 13 500",
    desc: "Лучший выбор для дома",
    features: ["Профиль Rehau Granus", "Трёхкамерный стеклопакет", "Гарантия 5 лет", "Монтаж включён", "Вывоз мусора", "Отделка откосов"],
    highlight: true,
    color: "#00D4AA",
  },
  {
    name: "Премиум",
    price: "от 21 000",
    desc: "Максимальный комфорт и тишина",
    features: ["Профиль Rehau Geneo", "Пятикамерный стеклопакет", "Гарантия 7 лет", "Монтаж включён", "Вывоз мусора", "Отделка откосов", "Москитные сетки", "Сервисное ТО"],
    highlight: false,
    color: "#FF6B35",
  },
];

const REVIEWS = [
  { name: "Анна Петрова", city: "Москва", rating: 5, text: "Заменили все окна в трёхкомнатной квартире за один день. Работали аккуратно, убрали за собой. Результат превзошёл ожидания — тепло, тихо!", date: "Март 2024" },
  { name: "Дмитрий Козлов", city: "Подмосковье", rating: 5, text: "Остеклили балкон с утеплением. Теперь это полноценная комната. Замерщик приехал в день звонка, смонтировали за 2 дня.", date: "Январь 2024" },
  { name: "Светлана Иванова", city: "Москва", rating: 5, text: "Обратились для офиса. Установили 24 окна в алюминиевом профиле. Всё чётко по срокам, документация в порядке, гарантия.", date: "Февраль 2024" },
  { name: "Михаил Соколов", city: "Химки", rating: 5, text: "Панорамное остекление загородного дома. Сделали индивидуальный проект, нестандартные размеры. Очень доволен!", date: "Декабрь 2023" },
];

const WINDOW_TYPES = ["Одностворчатое", "Двустворчатое", "Трёхстворчатое", "Балконный блок"];
const PROFILES = ["Стандарт (VEKA 70)", "Комфорт (Rehau Granus)", "Премиум (Rehau Geneo)"];
const GLASSES = ["Двухкамерный", "Трёхкамерный", "Пятикамерный"];

const BASE_PRICES: Record<string, number> = {
  "Одностворчатое": 8000,
  "Двустворчатое": 12000,
  "Трёхстворчатое": 17000,
  "Балконный блок": 22000,
};

const PROFILE_MULTIPLIERS: Record<string, number> = {
  "Стандарт (VEKA 70)": 1,
  "Комфорт (Rehau Granus)": 1.35,
  "Премиум (Rehau Geneo)": 1.75,
};

const GLASS_MULTIPLIERS: Record<string, number> = {
  "Двухкамерный": 1,
  "Трёхкамерный": 1.2,
  "Пятикамерный": 1.45,
};

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [windowType, setWindowType] = useState(WINDOW_TYPES[1]);
  const [profile, setProfile] = useState(PROFILES[0]);
  const [glass, setGlass] = useState(GLASSES[0]);
  const [width, setWidth] = useState(1200);
  const [height, setHeight] = useState(1400);
  const [quantity, setQuantity] = useState(1);
  const [extras, setExtras] = useState({ mosquito: false, sill: false, slopes: false, delivery: false });

  const basePrice = BASE_PRICES[windowType] * PROFILE_MULTIPLIERS[profile] * GLASS_MULTIPLIERS[glass];
  const areaMultiplier = (width * height) / (1200 * 1400);
  const extrasCost = (extras.mosquito ? 900 : 0) + (extras.sill ? 2500 : 0) + (extras.slopes ? 3500 : 0) + (extras.delivery ? 500 : 0);
  const totalOne = Math.round(basePrice * areaMultiplier + extrasCost);
  const total = totalOne * quantity;

  return (
    <div className="min-h-screen bg-white font-golos overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300" style={{ background: 'rgba(10,15,30,0.92)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #0070F3, #00D4AA)' }}>
                <Icon name="Grid2x2" size={18} className="text-white" />
              </div>
              <span className="text-white font-oswald text-xl font-bold tracking-wide">ОКНА<span style={{ color: '#00D4AA' }}>ПРО</span></span>
            </div>

            <div className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <a key={link.href} href={link.href} className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-lg hover:bg-white/10">
                  {link.label}
                </a>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-3">
              <a href="tel:+74951234567" className="text-white font-semibold text-sm flex items-center gap-1">
                <Icon name="Phone" size={14} style={{ color: '#00D4AA' }} />
                +7 (495) 123-45-67
              </a>
              <a href="#contacts" className="btn-primary px-4 py-2 rounded-xl text-sm text-white">
                Заказать замер
              </a>
            </div>

            <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden text-white p-2">
              <Icon name={menuOpen ? "X" : "Menu"} size={24} />
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="lg:hidden px-4 pb-4" style={{ background: 'rgba(10,15,30,0.98)' }}>
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}
                className="block text-gray-300 hover:text-white py-3 text-sm font-medium border-b border-white/10">
                {link.label}
              </a>
            ))}
            <a href="#contacts" className="btn-primary mt-4 block text-center px-4 py-3 rounded-xl text-white text-sm">
              Заказать замер
            </a>
          </div>
        )}
      </nav>

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

      {/* CALCULATOR */}
      <section id="calculator" className="py-24 section-dark relative overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(0,112,243,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,112,243,0.04) 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, #0070F3, transparent)' }} />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4" style={{ background: 'rgba(0,212,170,0.15)', border: '1px solid rgba(0,212,170,0.3)' }}>
              <Icon name="Calculator" size={14} style={{ color: '#00D4AA' }} />
              <span className="text-sm font-medium" style={{ color: '#00D4AA' }}>Онлайн-калькулятор</span>
            </div>
            <h2 className="font-oswald text-4xl lg:text-5xl font-bold text-white mb-4">
              РАССЧИТАЙТЕ СТОИМОСТЬ <br />
              <span className="gradient-text">ПРЯМО СЕЙЧАС</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">Укажите параметры окна и получите предварительную стоимость за несколько секунд</p>
          </div>

          <div className="glass-card rounded-3xl p-6 lg:p-8">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <label className="text-white font-semibold text-sm mb-3 flex items-center gap-2">
                    <Icon name="LayoutGrid" size={16} style={{ color: '#00D4AA' }} />
                    Тип окна
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {WINDOW_TYPES.map((type) => (
                      <button key={type} onClick={() => setWindowType(type)}
                        className="p-3 rounded-xl text-sm font-medium transition-all duration-200"
                        style={{
                          background: windowType === type ? 'linear-gradient(135deg, #0070F3, #00D4AA)' : 'rgba(255,255,255,0.06)',
                          color: windowType === type ? 'white' : 'rgba(255,255,255,0.6)',
                          border: windowType === type ? '1px solid transparent' : '1px solid rgba(255,255,255,0.1)',
                        }}>
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-white font-semibold text-sm mb-2 block">Ширина (мм): <span style={{ color: '#00D4AA' }}>{width}</span></label>
                    <input type="range" min={600} max={2400} step={100} value={width} onChange={(e) => setWidth(Number(e.target.value))}
                      className="w-full accent-cyan-400" />
                    <div className="flex justify-between text-xs text-gray-500 mt-1"><span>600</span><span>2400</span></div>
                  </div>
                  <div>
                    <label className="text-white font-semibold text-sm mb-2 block">Высота (мм): <span style={{ color: '#00D4AA' }}>{height}</span></label>
                    <input type="range" min={600} max={2400} step={100} value={height} onChange={(e) => setHeight(Number(e.target.value))}
                      className="w-full accent-cyan-400" />
                    <div className="flex justify-between text-xs text-gray-500 mt-1"><span>600</span><span>2400</span></div>
                  </div>
                </div>

                <div>
                  <label className="text-white font-semibold text-sm mb-3 flex items-center gap-2">
                    <Icon name="Layers" size={16} style={{ color: '#00D4AA' }} />
                    Профиль
                  </label>
                  <div className="space-y-2">
                    {PROFILES.map((p) => (
                      <button key={p} onClick={() => setProfile(p)}
                        className="w-full p-3 rounded-xl text-sm text-left transition-all duration-200 flex items-center gap-3"
                        style={{
                          background: profile === p ? 'rgba(0,112,243,0.2)' : 'rgba(255,255,255,0.04)',
                          border: profile === p ? '1px solid rgba(0,112,243,0.5)' : '1px solid rgba(255,255,255,0.08)',
                          color: profile === p ? 'white' : 'rgba(255,255,255,0.6)',
                        }}>
                        <div className="w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0" style={{ borderColor: profile === p ? '#0070F3' : 'rgba(255,255,255,0.3)' }}>
                          {profile === p && <div className="w-2 h-2 rounded-full" style={{ background: '#0070F3' }} />}
                        </div>
                        {p}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-white font-semibold text-sm mb-3 flex items-center gap-2">
                    <Icon name="Square" size={16} style={{ color: '#00D4AA' }} />
                    Стеклопакет
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {GLASSES.map((g) => (
                      <button key={g} onClick={() => setGlass(g)}
                        className="p-3 rounded-xl text-sm font-medium transition-all duration-200"
                        style={{
                          background: glass === g ? 'linear-gradient(135deg, #0070F3, #00D4AA)' : 'rgba(255,255,255,0.06)',
                          color: glass === g ? 'white' : 'rgba(255,255,255,0.6)',
                          border: glass === g ? '1px solid transparent' : '1px solid rgba(255,255,255,0.1)',
                        }}>
                        {g}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-white font-semibold text-sm mb-3 block">Дополнительно</label>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { key: 'mosquito', label: 'Москитная сетка', price: '+900 ₽' },
                      { key: 'sill', label: 'Подоконник', price: '+2 500 ₽' },
                      { key: 'slopes', label: 'Откосы', price: '+3 500 ₽' },
                      { key: 'delivery', label: 'Доставка', price: '+500 ₽' },
                    ].map((extra) => {
                      const isOn = extras[extra.key as keyof typeof extras];
                      return (
                        <button key={extra.key} onClick={() => setExtras(prev => ({ ...prev, [extra.key]: !prev[extra.key as keyof typeof prev] }))}
                          className="p-3 rounded-xl text-sm text-left transition-all duration-200 flex items-center gap-2"
                          style={{
                            background: isOn ? 'rgba(0,212,170,0.15)' : 'rgba(255,255,255,0.04)',
                            border: isOn ? '1px solid rgba(0,212,170,0.4)' : '1px solid rgba(255,255,255,0.08)',
                          }}>
                          <Icon name={isOn ? "CheckSquare" : "Square"} size={16} style={{ color: isOn ? '#00D4AA' : 'rgba(255,255,255,0.4)' }} />
                          <div>
                            <div className="font-medium" style={{ color: isOn ? '#00D4AA' : 'rgba(255,255,255,0.8)' }}>{extra.label}</div>
                            <div className="text-xs text-gray-500">{extra.price}</div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="flex flex-col">
                <div className="rounded-2xl p-6 flex-1 flex flex-col" style={{ background: 'linear-gradient(135deg, rgba(0,112,243,0.2) 0%, rgba(0,212,170,0.1) 100%)', border: '1px solid rgba(0,112,243,0.3)' }}>
                  <div className="text-center mb-6">
                    <div className="text-gray-300 text-sm mb-2">Стоимость 1 окна</div>
                    <div className="font-oswald text-4xl font-bold gradient-text">{totalOne.toLocaleString('ru')} ₽</div>
                  </div>

                  <div className="mb-6">
                    <label className="text-white font-semibold text-sm mb-3 block">Количество окон</label>
                    <div className="flex items-center gap-3">
                      <button onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-xl"
                        style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)' }}>−</button>
                      <span className="flex-1 text-center font-oswald text-2xl font-bold text-white">{quantity}</span>
                      <button onClick={() => setQuantity(quantity + 1)}
                        className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-xl"
                        style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)' }}>+</button>
                    </div>
                  </div>

                  <div className="space-y-2 mb-4 text-sm">
                    <div className="flex justify-between text-gray-400">
                      <span>Размер</span>
                      <span className="text-white">{width}×{height} мм</span>
                    </div>
                    <div className="flex justify-between text-gray-400">
                      <span>Профиль</span>
                      <span className="text-white">{profile.split(' ')[0]}</span>
                    </div>
                    <div className="flex justify-between text-gray-400">
                      <span>Стеклопакет</span>
                      <span className="text-white">{glass}</span>
                    </div>
                    {quantity > 1 && (
                      <div className="flex justify-between border-t border-white/10 pt-2 font-semibold">
                        <span className="text-white">Итого ({quantity} шт.)</span>
                        <span className="font-bold gradient-text">{total.toLocaleString('ru')} ₽</span>
                      </div>
                    )}
                  </div>

                  <div className="mt-auto space-y-3">
                    <div className="text-xs text-gray-500 text-center">* Точная стоимость — после замера</div>
                    <a href="#contacts" className="btn-primary w-full py-3 rounded-xl text-center text-white font-semibold block">
                      Заказать замер
                    </a>
                    <button className="w-full py-3 rounded-xl font-semibold text-sm transition-all text-white/70"
                      style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)' }}>
                      Получить КП на почту
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="py-24" style={{ background: '#F8FAFF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4" style={{ background: 'rgba(0,112,243,0.08)', border: '1px solid rgba(0,112,243,0.2)' }}>
              <Icon name="Image" size={14} style={{ color: '#0070F3' }} />
              <span className="text-sm font-medium" style={{ color: '#0070F3' }}>Портфолио</span>
            </div>
            <h2 className="font-oswald text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              НАШИ <span className="gradient-text">РАБОТЫ</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {PORTFOLIO.map((item) => (
              <div key={item.title} className="group relative rounded-2xl overflow-hidden cursor-pointer card-hover" style={{ height: 340 }}>
                <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)' }} />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="text-xs font-medium mb-1" style={{ color: '#00D4AA' }}>{item.type}</div>
                  <h3 className="font-oswald text-xl font-bold text-white mb-2">{item.title}</h3>
                  <div className="flex items-center gap-1 text-gray-300 text-sm">
                    <Icon name="Grid2x2" size={14} />
                    <span>{item.windows} окон</span>
                  </div>
                </div>
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300" style={{ background: 'rgba(255,255,255,0.2)' }}>
                  <Icon name="ArrowUpRight" size={18} className="text-white" />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <button className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold transition-all hover:bg-blue-50" style={{ background: 'white', color: '#0070F3', border: '2px solid #0070F3' }}>
              <Icon name="Grid3x3" size={18} />
              Смотреть все проекты
            </button>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-24 section-dark-2 relative overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 30% 50%, rgba(0,112,243,0.08) 0%, transparent 60%), radial-gradient(circle at 70% 50%, rgba(0,212,170,0.06) 0%, transparent 60%)' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4" style={{ background: 'rgba(255,107,53,0.15)', border: '1px solid rgba(255,107,53,0.3)' }}>
              <Icon name="Tag" size={14} style={{ color: '#FF6B35' }} />
              <span className="text-sm font-medium" style={{ color: '#FF6B35' }}>Цены</span>
            </div>
            <h2 className="font-oswald text-4xl lg:text-5xl font-bold text-white mb-4">
              ПРОЗРАЧНОЕ <span className="gradient-text-warm">ЦЕНООБРАЗОВАНИЕ</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">Без скрытых платежей. Финальная цена — после бесплатного замера.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 items-start">
            {PRICING.map((plan) => (
              <div key={plan.name}
                className="rounded-2xl p-6 transition-all duration-300 relative"
                style={{
                  background: plan.highlight ? 'linear-gradient(135deg, rgba(0,112,243,0.2), rgba(0,212,170,0.1))' : 'rgba(255,255,255,0.04)',
                  border: plan.highlight ? '2px solid rgba(0,212,170,0.5)' : '1px solid rgba(255,255,255,0.08)',
                  boxShadow: plan.highlight ? '0 20px 60px rgba(0,112,243,0.25)' : 'none',
                  transform: plan.highlight ? 'scale(1.05)' : 'scale(1)',
                }}>
                {plan.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold text-white" style={{ background: 'linear-gradient(135deg, #0070F3, #00D4AA)' }}>
                    ПОПУЛЯРНЫЙ
                  </div>
                )}
                <div className="mb-4">
                  <div className="font-oswald text-lg font-bold text-white mb-1">{plan.name}</div>
                  <div className="text-gray-400 text-sm">{plan.desc}</div>
                </div>
                <div className="mb-6">
                  <span className="font-oswald text-3xl font-bold" style={{ color: plan.color }}>{plan.price}</span>
                  <span className="text-gray-400 text-sm ml-1">/ окно</span>
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-300">
                      <Icon name="Check" size={16} style={{ color: plan.color }} />
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="#contacts"
                  className="block w-full py-3 rounded-xl text-center font-semibold text-sm transition-all"
                  style={plan.highlight
                    ? { background: 'linear-gradient(135deg, #0070F3, #00D4AA)', color: 'white' }
                    : { background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.8)', border: '1px solid rgba(255,255,255,0.15)' }}>
                  Выбрать тариф
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4" style={{ background: 'rgba(0,112,243,0.08)', border: '1px solid rgba(0,112,243,0.2)' }}>
              <Icon name="Star" size={14} style={{ color: '#0070F3' }} />
              <span className="text-sm font-medium" style={{ color: '#0070F3' }}>Отзывы</span>
            </div>
            <h2 className="font-oswald text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              НАМ <span className="gradient-text">ДОВЕРЯЮТ</span>
            </h2>
            <div className="flex items-center justify-center gap-3 mt-4">
              <div className="flex">
                {[1,2,3,4,5].map((s) => <Icon key={s} name="Star" size={20} style={{ color: '#FF6B35' }} />)}
              </div>
              <span className="text-2xl font-oswald font-bold text-gray-900">4.9</span>
              <span className="text-gray-400">/ 5.0 — более 430 отзывов</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {REVIEWS.map((review) => (
              <div key={review.name} className="p-6 rounded-2xl card-hover" style={{ background: '#F8FAFF', border: '1px solid rgba(0,0,0,0.05)' }}>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full flex items-center justify-center font-oswald font-bold text-white text-lg" style={{ background: 'linear-gradient(135deg, #0070F3, #00D4AA)' }}>
                      {review.name[0]}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{review.name}</div>
                      <div className="text-gray-400 text-xs">{review.city}</div>
                    </div>
                  </div>
                  <div className="text-gray-400 text-xs">{review.date}</div>
                </div>
                <div className="flex mb-3">
                  {Array(review.rating).fill(0).map((_, i) => <Icon key={i} name="Star" size={14} style={{ color: '#FF6B35' }} />)}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">"{review.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-24 section-dark relative overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(0,112,243,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,112,243,0.04) 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
        <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, #00D4AA, transparent)' }} />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ background: 'rgba(0,212,170,0.15)', border: '1px solid rgba(0,212,170,0.3)' }}>
                <Icon name="MapPin" size={14} style={{ color: '#00D4AA' }} />
                <span className="text-sm font-medium" style={{ color: '#00D4AA' }}>Контакты</span>
              </div>
              <h2 className="font-oswald text-4xl lg:text-5xl font-bold text-white mb-6">
                СВЯЖИТЕСЬ <br />
                <span className="gradient-text">С НАМИ</span>
              </h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Закажите бесплатный замер — наш специалист приедет в удобное для вас время и рассчитает точную стоимость.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  { icon: "Phone", label: "Телефон", value: "+7 (495) 123-45-67", href: "tel:+74951234567", color: "#0070F3" },
                  { icon: "Mail", label: "Email", value: "info@oknapro.ru", href: "mailto:info@oknapro.ru", color: "#00D4AA" },
                  { icon: "MapPin", label: "Офис", value: "Москва, ул. Промышленная, 12", href: "#", color: "#FF6B35" },
                  { icon: "Clock", label: "Режим работы", value: "Пн–Сб: 9:00–20:00", href: "#", color: "#7C3AED" },
                ].map((contact) => (
                  <a key={contact.label} href={contact.href}
                    className="flex items-center gap-4 p-4 rounded-2xl transition-all duration-200 hover:bg-white/5">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${contact.color}20` }}>
                      <Icon name={contact.icon} size={18} style={{ color: contact.color }} />
                    </div>
                    <div>
                      <div className="text-gray-400 text-xs">{contact.label}</div>
                      <div className="text-white font-medium">{contact.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="glass-card rounded-3xl p-8">
              <h3 className="font-oswald text-2xl font-bold text-white mb-6">Заказать бесплатный замер</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="text-gray-300 text-sm mb-2 block">Ваше имя</label>
                  <input type="text" placeholder="Иван Иванов"
                    className="w-full px-4 py-3 rounded-xl text-white placeholder-gray-500 outline-none transition-all focus:ring-2 focus:ring-blue-500"
                    style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)' }} />
                </div>
                <div>
                  <label className="text-gray-300 text-sm mb-2 block">Телефон</label>
                  <input type="tel" placeholder="+7 (000) 000-00-00"
                    className="w-full px-4 py-3 rounded-xl text-white placeholder-gray-500 outline-none transition-all focus:ring-2 focus:ring-blue-500"
                    style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)' }} />
                </div>
                <div>
                  <label className="text-gray-300 text-sm mb-2 block">Что вас интересует?</label>
                  <select className="w-full px-4 py-3 rounded-xl outline-none transition-all"
                    style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.8)' }}>
                    <option value="" style={{ background: '#1a2440' }}>Выберите услугу</option>
                    {SERVICES.map((s) => (
                      <option key={s.title} value={s.title} style={{ background: '#1a2440' }}>{s.title}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-gray-300 text-sm mb-2 block">Комментарий</label>
                  <textarea rows={3} placeholder="Расскажите подробнее..."
                    className="w-full px-4 py-3 rounded-xl text-white placeholder-gray-500 outline-none transition-all focus:ring-2 focus:ring-blue-500 resize-none"
                    style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)' }} />
                </div>
                <button type="submit" className="btn-primary w-full py-4 rounded-2xl text-white font-semibold text-base flex items-center justify-center gap-2">
                  <Icon name="Send" size={18} />
                  Заказать замер бесплатно
                </button>
                <p className="text-gray-500 text-xs text-center">
                  Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10" style={{ background: '#060B16', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #0070F3, #00D4AA)' }}>
                <Icon name="Grid2x2" size={16} className="text-white" />
              </div>
              <span className="text-white font-oswald text-lg font-bold">ОКНА<span style={{ color: '#00D4AA' }}>ПРО</span></span>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              {NAV_LINKS.map((link) => (
                <a key={link.href} href={link.href} className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
                  {link.label}
                </a>
              ))}
            </div>
            <div className="text-gray-600 text-sm">© 2024 ОкнаПро. Все права защищены.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}