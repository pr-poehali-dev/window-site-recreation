import Icon from "@/components/ui/icon";
import { NAV_LINKS, PORTFOLIO, PRICING, REVIEWS, SERVICES } from "./data";

export default function BottomSections() {
  return (
    <>
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
    </>
  );
}
