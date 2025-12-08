import React from 'react';

const RickMortyBackground = () => {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      overflow: 'hidden',
      background: 'linear-gradient(180deg, #0a0118 0%, #1a0933 25%, #2d1b4e 50%, #1a0933 75%, #0a0118 100%)',
      zIndex: -1
    }}>
      {/* Campo de estrellas mejorado */}
      <div style={{ position: 'absolute', width: '100%', height: '100%' }}>
        {[...Array(150)].map((_, i) => (
          <div
            key={`star-${i}`}
            style={{
              position: 'absolute',
              background: i % 5 === 0 ? '#00ff41' : 'white',
              borderRadius: '50%',
              width: Math.random() * 3 + 0.5 + 'px',
              height: Math.random() * 3 + 0.5 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animation: `twinkle ${Math.random() * 4 + 2}s ease-in-out ${Math.random() * 3}s infinite`,
              opacity: Math.random() * 0.8 + 0.2,
              boxShadow: i % 5 === 0 ? '0 0 4px #00ff41' : '0 0 2px white'
            }}
          />
        ))}
      </div>

      {/* Portal Principal Ultra Mejorado */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '500px',
        height: '500px',
        opacity: 0.5,
        filter: 'blur(0.5px)'
      }}>
        {/* Anillos externos giratorios */}
        {[...Array(15)].map((_, i) => (
          <div
            key={`ring-${i}`}
            style={{
              position: 'absolute',
              inset: 0,
              borderRadius: '50%',
              border: `${4 - i * 0.2}px solid ${i % 3 === 0 ? '#00ff41' : i % 3 === 1 ? '#39ff14' : '#0af871'}`,
              width: `${100 - i * 5}%`,
              height: `${100 - i * 5}%`,
              top: `${i * 2.5}%`,
              left: `${i * 2.5}%`,
              animation: `spin ${2 + i * 0.2}s linear infinite ${i % 2 === 0 ? 'normal' : 'reverse'}`,
              opacity: 1 - i * 0.05,
              boxShadow: `0 0 ${30 - i * 2}px ${i % 3 === 0 ? '#00ff41' : i % 3 === 1 ? '#39ff14' : '#0af871'}, inset 0 0 ${20 - i}px ${i % 3 === 0 ? '#00ff41' : '#39ff14'}`,
              filter: i % 4 === 0 ? 'blur(1px)' : 'none'
            }}
          />
        ))}
        
        {/* Centro del portal con pulso */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '220px',
          height: '220px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, #00ff41 0%, #39ff14 25%, #0af871 50%, #0a8f2a 75%, transparent 100%)',
          animation: 'pulseIntense 1.5s ease-in-out infinite',
          boxShadow: '0 0 100px #00ff41, 0 0 150px #39ff14, inset 0 0 60px #00ff41'
        }} />

        {/* Partículas orbitales */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`orbit-${i}`}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: '12px',
              height: '12px',
              background: '#00ff41',
              borderRadius: '50%',
              transform: `rotate(${i * 45}deg) translateX(${180}px)`,
              animation: `orbit ${4 + i * 0.5}s linear infinite`,
              boxShadow: '0 0 15px #00ff41',
              opacity: 0.8
            }}
          />
        ))}
      </div>

      {/* Portales secundarios mejorados */}
      {[
        { top: '12%', left: '12%', size: 150, delay: 0, color: '#00ff41' },
        { top: '15%', right: '15%', size: 130, delay: 0.8, color: '#39ff14' },
        { bottom: '18%', left: '20%', size: 110, delay: 1.6, color: '#0af871' },
        { bottom: '12%', right: '12%', size: 140, delay: 2.4, color: '#00ff41' },
        { top: '45%', left: '8%', size: 90, delay: 3.2, color: '#39ff14' },
        { top: '40%', right: '10%', size: 100, delay: 4, color: '#0af871' }
      ].map((portal, idx) => (
        <div key={`portal-${idx}`} style={{
          position: 'absolute',
          ...portal,
          width: portal.size + 'px',
          height: portal.size + 'px',
          opacity: 0.35
        }}>
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                inset: `${i * 12}%`,
                borderRadius: '50%',
                border: `${3 - i * 0.4}px solid ${portal.color}`,
                animation: `spin ${2 + i * 0.3}s linear infinite ${i % 2 === 0 ? 'normal' : 'reverse'}, float ${3 + portal.delay}s ease-in-out infinite`,
                boxShadow: `0 0 ${20 - i * 3}px ${portal.color}`,
                opacity: 1 - i * 0.15
              }}
            />
          ))}
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '40%',
            height: '40%',
            borderRadius: '50%',
            background: `radial-gradient(circle, ${portal.color} 0%, transparent 70%)`,
            animation: `pulse ${2 + portal.delay}s ease-in-out infinite`,
            boxShadow: `0 0 30px ${portal.color}`
          }} />
        </div>
      ))}

      {/* Planetas mejorados con texturas */}
      <div style={{
        position: 'absolute',
        top: '22%',
        right: '18%',
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #a855f7 0%, #ec4899 50%, #7c3aed 100%)',
        boxShadow: '0 0 40px rgba(168, 85, 247, 0.6), inset -10px -10px 30px rgba(0,0,0,0.3)',
        animation: 'float 6s ease-in-out infinite, rotate 20s linear infinite',
        border: '2px solid rgba(236, 72, 153, 0.3)'
      }}>
        <div style={{
          position: 'absolute',
          top: '20%',
          left: '15%',
          width: '25px',
          height: '25px',
          borderRadius: '50%',
          background: 'rgba(0, 0, 0, 0.2)',
          boxShadow: 'inset 0 0 10px rgba(0,0,0,0.5)'
        }} />
      </div>
      
      <div style={{
        position: 'absolute',
        bottom: '28%',
        left: '15%',
        width: '80px',
        height: '80px',
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #3b82f6 0%, #06b6d4 50%, #2563eb 100%)',
        boxShadow: '0 0 35px rgba(59, 130, 246, 0.6), inset -8px -8px 25px rgba(0,0,0,0.3)',
        animation: 'float 7s ease-in-out 1.5s infinite, rotate 25s linear infinite',
        border: '2px solid rgba(6, 182, 212, 0.3)'
      }}>
        <div style={{
          position: 'absolute',
          top: '30%',
          right: '20%',
          width: '18px',
          height: '18px',
          borderRadius: '50%',
          background: 'rgba(0, 0, 0, 0.2)',
          boxShadow: 'inset 0 0 8px rgba(0,0,0,0.5)'
        }} />
      </div>

      <div style={{
        position: 'absolute',
        top: '60%',
        right: '25%',
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #f59e0b 0%, #ef4444 50%, #dc2626 100%)',
        boxShadow: '0 0 30px rgba(245, 158, 11, 0.6), inset -6px -6px 20px rgba(0,0,0,0.3)',
        animation: 'float 5s ease-in-out 2.5s infinite, rotate 15s linear infinite',
        border: '2px solid rgba(239, 68, 68, 0.3)'
      }} />

      {/* Partículas de energía verde mejoradas */}
      {[...Array(40)].map((_, i) => (
        <div
          key={`particle-${i}`}
          style={{
            position: 'absolute',
            background: i % 4 === 0 ? '#00ff41' : i % 4 === 1 ? '#39ff14' : i % 4 === 2 ? '#0af871' : '#61dafb',
            borderRadius: '50%',
            width: Math.random() * 8 + 3 + 'px',
            height: Math.random() * 8 + 3 + 'px',
            top: Math.random() * 100 + '%',
            left: Math.random() * 100 + '%',
            animation: `float ${Math.random() * 5 + 4}s ease-in-out ${Math.random() * 4}s infinite, twinkle ${Math.random() * 3 + 1.5}s ease-in-out infinite`,
            opacity: 0.7,
            boxShadow: `0 0 15px ${i % 4 === 0 ? '#00ff41' : i % 4 === 1 ? '#39ff14' : i % 4 === 2 ? '#0af871' : '#61dafb'}`,
            filter: 'blur(0.5px)'
          }}
        />
      ))}

      {/* Rayos de energía */}
      {[...Array(6)].map((_, i) => (
        <div
          key={`ray-${i}`}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '2px',
            height: '400px',
            background: `linear-gradient(180deg, transparent 0%, ${i % 2 === 0 ? '#00ff41' : '#39ff14'} 50%, transparent 100%)`,
            transform: `rotate(${i * 60}deg) translateY(-200px)`,
            transformOrigin: 'center',
            animation: `spin ${10 + i * 2}s linear infinite`,
            opacity: 0.15,
            boxShadow: `0 0 10px ${i % 2 === 0 ? '#00ff41' : '#39ff14'}`
          }}
        />
      ))}

      {/* Nebulosas de fondo */}
      <div style={{
        position: 'absolute',
        top: '15%',
        left: '10%',
        width: '300px',
        height: '300px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, transparent 70%)',
        filter: 'blur(60px)',
        animation: 'pulse 8s ease-in-out infinite'
      }} />

      <div style={{
        position: 'absolute',
        bottom: '20%',
        right: '15%',
        width: '350px',
        height: '350px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
        filter: 'blur(70px)',
        animation: 'pulse 10s ease-in-out 2s infinite'
      }} />

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes pulse {
          0%, 100% { 
            transform: scale(1);
            opacity: 0.6;
          }
          50% { 
            transform: scale(1.05);
            opacity: 0.8;
          }
        }

        @keyframes pulseIntense {
          0%, 100% { 
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.9;
          }
          50% { 
            transform: translate(-50%, -50%) scale(1.15);
            opacity: 1;
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-20px) translateX(10px); }
          50% { transform: translateY(-10px) translateX(-10px); }
          75% { transform: translateY(-25px) translateX(5px); }
        }
        
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.3); }
        }

        @keyframes orbit {
          from { transform: rotate(0deg) translateX(180px); }
          to { transform: rotate(360deg) translateX(180px); }
        }

        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default RickMortyBackground;