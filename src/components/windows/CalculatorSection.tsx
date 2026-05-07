import { useState } from "react";
import Icon from "@/components/ui/icon";
import {
  WINDOW_TYPES,
  PROFILES,
  GLASSES,
  BASE_PRICES,
  PROFILE_MULTIPLIERS,
  GLASS_MULTIPLIERS,
} from "./data";

export default function CalculatorSection() {
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
  );
}
