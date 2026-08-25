import {
  Award, Building2, CheckCircle2, Clock, Cog, Cpu, Factory, Gauge,
  GraduationCap, HardHat, HeartPulse, Landmark, Layers, Leaf, Lightbulb,
  MapPin, Package, PenTool, Phone, Mail, Globe, Recycle, Rocket, Ruler,
  ShieldCheck, Ship, Sparkles, Target, Timer, TrendingUp, Truck, Users,
  Wrench, Zap, Eye, Compass, Handshake, Headset, LineChart, Linkedin,
  Facebook, Twitter, Instagram, Youtube, Building, Briefcase, FileCheck,
  Network, Server, Wifi, Droplet, Flame, Plane, Train, Wallet,
} from 'lucide-react';

/**
 * Name -> component map. `icon` fields in companyData.js reference these keys,
 * which keeps the data file free of imports and JSX.
 * Add entries here as the PDF's subject matter requires.
 */
const ICONS = {
  award: Award, building: Building, building2: Building2, briefcase: Briefcase,
  check: CheckCircle2, clock: Clock, cog: Cog, compass: Compass, cpu: Cpu,
  droplet: Droplet, eye: Eye, factory: Factory, facebook: Facebook,
  filecheck: FileCheck, flame: Flame, gauge: Gauge, globe: Globe,
  graduation: GraduationCap, handshake: Handshake, hardhat: HardHat,
  headset: Headset, health: HeartPulse, instagram: Instagram,
  landmark: Landmark, layers: Layers, leaf: Leaf, lightbulb: Lightbulb,
  linechart: LineChart, linkedin: Linkedin, mail: Mail, mappin: MapPin,
  network: Network, package: Package, pentool: PenTool, phone: Phone,
  plane: Plane, recycle: Recycle, rocket: Rocket, ruler: Ruler,
  server: Server, shield: ShieldCheck, ship: Ship, sparkles: Sparkles,
  target: Target, timer: Timer, train: Train, trending: TrendingUp,
  truck: Truck, twitter: Twitter, users: Users, wallet: Wallet, wifi: Wifi,
  wrench: Wrench, youtube: Youtube, zap: Zap,
};

/**
 * Renders a named icon. Icons here are decorative -- the adjacent heading
 * carries the meaning -- so they are hidden from assistive tech by default.
 */
export function Icon({ name, size = 22, strokeWidth = 1.6, label, ...rest }) {
  const Glyph = ICONS[name] ?? Sparkles;
  return (
    <Glyph
      size={size}
      strokeWidth={strokeWidth}
      aria-hidden={label ? undefined : true}
      aria-label={label}
      role={label ? 'img' : undefined}
      focusable="false"
      {...rest}
    />
  );
}

export { ICONS };
