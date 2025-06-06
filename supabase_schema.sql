-- Tabla para mensajes de contacto
CREATE TABLE IF NOT EXISTS contact_messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  nombre VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  telefono VARCHAR(50),
  edad VARCHAR(20),
  servicio VARCHAR(100),
  mensaje TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  read BOOLEAN DEFAULT FALSE,
  responded BOOLEAN DEFAULT FALSE
);

-- Tabla para suscriptores del newsletter
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  is_active BOOLEAN DEFAULT TRUE,
  unsubscribed_at TIMESTAMP WITH TIME ZONE
);

-- Índices para mejorar el rendimiento
CREATE INDEX idx_contact_messages_created_at ON contact_messages(created_at DESC);
CREATE INDEX idx_contact_messages_read ON contact_messages(read);
CREATE INDEX idx_newsletter_subscribers_email ON newsletter_subscribers(email);
CREATE INDEX idx_newsletter_subscribers_is_active ON newsletter_subscribers(is_active);

-- RLS (Row Level Security) policies
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- Política para permitir insertar mensajes de contacto desde el frontend
CREATE POLICY "Allow public to insert contact messages" ON contact_messages
  FOR INSERT TO public
  WITH CHECK (true);

-- Política para permitir insertar suscriptores desde el frontend
CREATE POLICY "Allow public to insert newsletter subscribers" ON newsletter_subscribers
  FOR INSERT TO public
  WITH CHECK (true);

-- Política para permitir que el público verifique si un email ya está suscrito
CREATE POLICY "Allow public to check existing subscribers" ON newsletter_subscribers
  FOR SELECT TO public
  USING (true);