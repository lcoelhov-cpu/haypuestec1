import { useMemo, useState } from "react";
import {
  Alert,
  AppBar,
  Badge,
  Button,
  Card,
  CardContent,
  CardMedia,
  Checkbox,
  Chip,
  CssBaseline,
  Divider,
  Drawer,
  FormControl,
  FormControlLabel,
  IconButton,
  InputAdornment,
  MenuItem,
  Paper,
  Select,
  Slider,
  Snackbar,
  TextField,
  ThemeProvider,
  Toolbar,
  Typography,
  createTheme,
} from "@mui/material";
import {
  AddShoppingCart,
  ArrowForward,
  Build,
  CheckCircle,
  Close,
  Email,
  FlightTakeoff,
  HeadsetMic,
  Home,
  Laptop,
  LocalFireDepartment,
  LocationOn,
  Menu,
  Phone,
  Public,
  Search,
  Send,
  ShoppingCart,
  Storefront,
  Tune,
  Verified,
  WhatsApp,
  WorkspacePremium,
} from "@mui/icons-material";
import "./App.css";
import ContactPageSupabase from "./components/ContactPage";
import QuoteRequestDialog from "./components/QuoteRequestDialog";

const products = [
  {
    id: 1,
    name: "ASUS ROG Zephyrus G16",
    category: "Laptops",
    description: "Ultra portátil gamer · Core Ultra 9 · RTX 4080 · 32GB · 1TB",
    price: 18990,
    oldPrice: 22400,
    stock: 4,
    image:
      "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?auto=format&fit=crop&w=900&q=85",
    badge: "Oferta flash",
  },
  {
    id: 2,
    name: "ASUS TUF RTX 4070 Ti SUPER",
    category: "Tarjetas de Video",
    description: "16GB GDDR6X · DLSS 3.5 · Triple ventilador · OC Edition",
    price: 7390,
    oldPrice: 8400,
    stock: 5,
    image:
      "https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=900&q=85",
    badge: "Más vendido",
  },
  {
    id: 3,
    name: "AMD Ryzen 7 7800X3D",
    category: "Procesadores",
    description: "8 núcleos / 16 hilos · 96MB 3D V-Cache · AM5",
    price: 3250,
    oldPrice: 3850,
    stock: 7,
    image:
      "https://images.unsplash.com/photo-1555617981-dac3880eac6e?auto=format&fit=crop&w=900&q=85",
    badge: "Gaming",
  },
  {
    id: 4,
    name: "ASUS ROG Swift 27” QHD 240Hz",
    category: "Monitores",
    description: "Fast IPS · 1ms · G-SYNC compatible · HDR400",
    price: 3390,
    oldPrice: 4200,
    stock: 4,
    image:
      "https://images.unsplash.com/photo-1616588589676-62b3bd4ff6d2?auto=format&fit=crop&w=900&q=85",
    badge: "eSports",
  },
  {
    id: 5,
    name: "Lenovo Legion Pro 7i Gen 9",
    category: "Laptops",
    description: "Core i9-14900HX · RTX 4090 · 32GB DDR5 · 2TB SSD",
    price: 24990,
    stock: 2,
    image:
      "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=900&q=85",
    badge: "Nuevo",
  },
  {
    id: 6,
    name: "Kingston Fury Beast 32GB DDR5",
    category: "Memorias",
    description: "2x16GB · 6000MHz · RGB · Intel XMP 3.0",
    price: 1150,
    stock: 16,
    image:
      "https://images.unsplash.com/photo-1562976540-1502c2145186?auto=format&fit=crop&w=900&q=85",
    badge: "Stock local",
  },
];
const categories = [
  "Todos",
  "Laptops",
  "Tarjetas de Video",
  "Procesadores",
  "Monitores",
  "Memorias",
];
const navItems = [
  { label: "Inicio", key: "home", icon: <Home fontSize="small" /> },
  { label: "Catálogo", key: "catalog", icon: <Storefront fontSize="small" /> },
  { label: "Arma tu PC", key: "builder", icon: <Build fontSize="small" /> },
  {
    label: "Proveedores",
    key: "suppliers",
    icon: <WorkspacePremium fontSize="small" />,
  },
  { label: "Contacto", key: "contact", icon: <HeadsetMic fontSize="small" /> },
];
const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#62a8ff" },
    secondary: { main: "#52d6c1" },
    background: { default: "#0b1019", paper: "#131b27" },
  },
  typography: {
    fontFamily: "DM Sans, sans-serif",
    button: { textTransform: "none", fontWeight: 700 },
  },
  shape: { borderRadius: 8 },
  components: {
    MuiButton: { defaultProps: { disableElevation: true } },
    MuiTextField: { defaultProps: { size: "small" } },
  },
});

function Header({ page, setPage, cartCount, onMenu }) {
  return (
    <AppBar
      position="sticky"
      elevation={0}
      className="!bg-[#0b1019]/95 !border-b !border-white/10 backdrop-blur-md"
    >
      <Toolbar className="mx-auto flex w-full max-w-[1440px] gap-3 px-4 py-2 md:px-8">
        <IconButton onClick={onMenu} className="!text-slate-200 md:!hidden">
          <Menu />
        </IconButton>
        <button
          onClick={() => setPage("home")}
          className="mr-auto flex items-center gap-2 text-left"
        >
          <span className="grid h-9 w-9 place-items-center rounded bg-[#1976d2] font-bold text-white shadow-[0_0_20px_#1976d288]">
            H
          </span>
          <span className="display-font text-lg font-bold tracking-tight text-white">
            HayPuestec<span className="text-[#52d6c1]">.</span>
          </span>
        </button>
        <nav className="hidden items-center gap-1 md:flex">
          {navItems.slice(0, 4).map((item) => (
            <Button
              key={item.key}
              onClick={() => setPage(item.key)}
              startIcon={item.icon}
              className={`!rounded !px-3 !py-2 !text-sm ${page === item.key ? "!bg-blue-500/15 !text-[#8fc2ff]" : "!text-slate-400"}`}
            >
              {item.label}
            </Button>
          ))}
        </nav>
        <IconButton
          onClick={() => setPage("catalog")}
          className="!text-slate-300"
        >
          <Badge badgeContent={cartCount} color="secondary">
            <ShoppingCart />
          </Badge>
        </IconButton>
        <Button
          onClick={() => setPage("contact")}
          variant="contained"
          color="primary"
          className="hidden !rounded md:!flex"
        >
          Cotizar ahora
        </Button>
      </Toolbar>
    </AppBar>
  );
}
function SectionHeading({ eyebrow, title, action }) {
  return (
    <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <div className="mono-font text-[11px] font-bold uppercase tracking-[.18em] text-[#52d6c1]">
          {eyebrow}
        </div>
        <h2 className="display-font mt-1 text-2xl font-bold tracking-tight text-white md:text-3xl">
          {title}
        </h2>
      </div>
      {action}
    </div>
  );
}
function ProductCard({ product, onAdd }) {
  return (
    <Card className="group flex h-full flex-col !rounded-lg !border !border-white/10 !bg-[#131b27] transition duration-300 hover:-translate-y-1 hover:!border-blue-400/50 hover:shadow-[0_12px_35px_#0008]">
      <div className="relative overflow-hidden bg-[#0d141e]">
        <CardMedia
          component="img"
          image={product.image}
          alt={product.name}
          className="h-44 object-cover opacity-85 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
        />
        <Chip
          label={product.badge}
          size="small"
          className="!absolute !left-3 !top-3 !bg-[#1976d2] !text-white"
        />
        <span className="absolute right-3 top-3 rounded bg-[#0b1019dd] px-2 py-1 text-[11px] text-[#52d6c1]">
          {product.stock} en stock
        </span>
      </div>
      <CardContent className="flex flex-1 flex-col !p-4">
        <Typography
          variant="overline"
          className="!text-[10px] !font-bold !tracking-widest !text-[#62a8ff]"
        >
          {product.category}
        </Typography>
        <Typography className="display-font !mt-1 !text-lg !font-bold !leading-tight !text-white">
          {product.name}
        </Typography>
        <Typography className="!mt-2 !text-sm !leading-6 !text-slate-400">
          {product.description}
        </Typography>
        <div className="mt-auto flex items-end justify-between gap-2 pt-5">
          <div>
            <span className="text-xs text-slate-500 line-through">
              {product.oldPrice
                ? `Bs ${product.oldPrice.toLocaleString("es-BO")}`
                : "Factura oficial"}
            </span>
            <div className="mono-font text-xl font-bold text-[#52d6c1]">
              Bs {product.price.toLocaleString("es-BO")}
            </div>
          </div>
          <IconButton
            aria-label={`Agregar ${product.name}`}
            onClick={() => onAdd(product)}
            className="!rounded !bg-[#1976d2] !text-white hover:!bg-[#4393ed]"
          >
            <AddShoppingCart fontSize="small" />
          </IconButton>
        </div>
      </CardContent>
    </Card>
  );
}
function FilterPanel({ price, setPrice, selectedBrands, setSelectedBrands }) {
  const brands = [
    "ASUS ROG",
    "Lenovo Legion",
    "NVIDIA GeForce",
    "AMD Ryzen",
    "MSI",
    "Kingston Fury",
  ];
  return (
    <Paper className="!rounded-lg !border !border-white/10 !bg-[#131b27] !p-4">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2 font-bold text-white">
          <Tune fontSize="small" className="!text-[#62a8ff]" /> Filtros
        </div>
        <Button
          size="small"
          onClick={() => {
            setPrice(18000);
            setSelectedBrands([]);
          }}
          className="!text-[#52d6c1]"
        >
          Limpiar
        </Button>
      </div>
      <Divider className="!border-white/10" />
      <div className="pt-5">
        <div className="flex justify-between text-xs text-slate-300">
          <span>Rango de precio</span>
          <span className="mono-font text-[#62a8ff]">
            Bs {price.toLocaleString("es-BO")}
          </span>
        </div>
        <Slider
          value={price}
          min={500}
          max={30000}
          onChange={(_, value) => setPrice(value)}
          className="!my-2 !text-[#62a8ff]"
        />
      </div>
      <div className="mt-4 text-xs font-bold uppercase tracking-wider text-slate-500">
        Marcas oficiales
      </div>
      {brands.map((brand) => (
        <FormControlLabel
          key={brand}
          className="!my-0 !block !text-sm !text-slate-300"
          control={
            <Checkbox
              size="small"
              checked={selectedBrands.includes(brand)}
              onChange={() =>
                setSelectedBrands((current) =>
                  current.includes(brand)
                    ? current.filter((item) => item !== brand)
                    : [...current, brand],
                )
              }
            />
          }
          label={brand}
        />
      ))}
      <div className="mt-5 rounded bg-[#0d141e] p-3 text-xs leading-5 text-slate-400">
        <Verified
          fontSize="small"
          className="mr-1 align-middle !text-[#52d6c1]"
        />{" "}
        Precios con factura y garantía oficial.
      </div>
    </Paper>
  );
}
function CatalogPage({ onAdd }) {
  const [category, setCategory] = useState("Todos");
  const [query, setQuery] = useState("");
  const [price, setPrice] = useState(18000);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const visible = useMemo(
    () =>
      products.filter(
        (product) =>
          (category === "Todos" || product.category === category) &&
          product.price <= price &&
          product.name.toLowerCase().includes(query.toLowerCase()),
      ),
    [category, price, query],
  );
  return (
    <div className="space-y-7">
      <div className="rounded-lg border border-white/10 bg-[#131b27] p-5 md:p-7">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="mono-font text-xs uppercase tracking-widest text-[#52d6c1]">
              342 artículos disponibles
            </div>
            <h1 className="display-font mt-2 text-3xl font-bold text-white md:text-4xl">
              Catálogo de hardware
            </h1>
            <p className="mt-2 text-slate-400">
              Importación directa, stock verificado y despacho nacional.
            </p>
          </div>
          <TextField
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Buscar producto..."
            className="md:w-80"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search fontSize="small" />
                </InputAdornment>
              ),
            }}
          />
        </div>
      </div>
      <div className="flex gap-2 overflow-x-auto pb-1">
        {categories.map((item) => (
          <Button
            key={item}
            onClick={() => setCategory(item)}
            className={`!shrink-0 !rounded !border !px-4 !py-2 ${category === item ? "!border-blue-400 !bg-blue-500/20 !text-blue-200" : "!border-white/10 !text-slate-400"}`}
          >
            {item}
          </Button>
        ))}
      </div>
      <div className="grid gap-6 lg:grid-cols-[240px_1fr]">
        <FilterPanel
          price={price}
          setPrice={setPrice}
          selectedBrands={selectedBrands}
          setSelectedBrands={setSelectedBrands}
        />
        <div>
          <div className="mb-4 flex items-center justify-between text-sm text-slate-400">
            <span>
              <b className="text-white">{visible.length}</b> resultados visibles
            </span>
            <FormControl size="small" className="min-w-40">
              <Select defaultValue="popular" className="!text-sm">
                <MenuItem value="popular">Más populares</MenuItem>
                <MenuItem value="price">Menor precio</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {visible.map((product) => (
              <ProductCard key={product.id} product={product} onAdd={onAdd} />
            ))}
          </div>
          {visible.length === 0 && (
            <div className="rounded-lg border border-dashed border-white/15 p-10 text-center text-slate-400">
              No encontramos productos con esos filtros.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
function HomePage({ setPage, onAdd }) {
  return (
    <div className="space-y-12">
      <section className="relative overflow-hidden rounded-lg border border-blue-400/20 bg-[#121d2c] px-6 py-12 md:px-12 md:py-16">
        <div className="absolute inset-y-0 right-0 w-full bg-[radial-gradient(circle_at_80%_50%,#1976d255,transparent_45%)]" />
        <div className="relative max-w-2xl">
          <Chip
            label="Stock inmediato · Bolivia"
            className="!mb-5 !bg-[#52d6c122] !text-[#52d6c1]"
          />
          <h1 className="display-font text-4xl font-bold leading-tight text-white md:text-6xl">
            Hardware que mueve
            <br />
            <span className="text-[#62a8ff]">tu siguiente nivel.</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-slate-300 md:text-lg">
            Componentes de alto rendimiento, laptops gamer y soluciones
            enterprise con garantía real, factura legal y despacho exprés.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              variant="contained"
              onClick={() => setPage("catalog")}
              startIcon={<LocalFireDepartment />}
              className="!rounded !px-5 !py-3"
            >
              Ver ofertas flash
            </Button>
            <Button
              variant="outlined"
              onClick={() => setPage("builder")}
              startIcon={<Build />}
              className="!rounded !border-[#52d6c1] !text-[#52d6c1]"
            >
              Armar mi PC
            </Button>
          </div>
        </div>
      </section>
      <section>
        <SectionHeading
          eyebrow="Liquidación de inventario directo"
          title="Ofertas flash gamer"
          action={
            <Button
              onClick={() => setPage("catalog")}
              endIcon={<ArrowForward />}
              className="!text-[#62a8ff]"
            >
              Ver catálogo
            </Button>
          }
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {products.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} onAdd={onAdd} />
          ))}
        </div>
      </section>
      <section>
        <SectionHeading
          eyebrow="Elige tu plataforma"
          title="Categorías de alto rendimiento"
        />
        <div className="grid gap-4 md:grid-cols-3">
          {["Laptops Gamer", "Tarjetas de Video", "Armado de PC"].map(
            (item, index) => (
              <button
                key={item}
                onClick={() => setPage(index === 2 ? "builder" : "catalog")}
                className="group relative min-h-44 overflow-hidden rounded-lg border border-white/10 bg-[#131b27] p-5 text-left transition hover:border-blue-400/50"
              >
                <div className="absolute -right-5 -top-6 text-[140px] font-bold text-white/[.03]">
                  0{index + 1}
                </div>
                <div className="relative">
                  <span className="text-[#52d6c1]">
                    {index === 0 ? (
                      <Laptop />
                    ) : index === 1 ? (
                      <Public />
                    ) : (
                      <Build />
                    )}
                  </span>
                  <h3 className="display-font mt-8 text-xl font-bold text-white">
                    {item}
                  </h3>
                  <span className="mt-2 inline-flex items-center gap-1 text-sm text-[#62a8ff]">
                    Explorar <ArrowForward fontSize="inherit" />
                  </span>
                </div>
              </button>
            ),
          )}
        </div>
      </section>
    </div>
  );
}
function BuilderPage() {
  const [step, setStep] = useState(0);
  const [quoteDialogOpen, setQuoteDialogOpen] = useState(false);
  const parts = [
    ["Procesador", "AMD Ryzen 7 7800X3D", "Bs 3.250"],
    ["Tarjeta gráfica", "ASUS RTX 4070 Ti SUPER", "Bs 7.390"],
    ["Memoria RAM", "Kingston Fury 32GB DDR5", "Bs 1.150"],
    ["Almacenamiento", "WD Black SN850X 1TB NVMe", "Bs 1.090"],
  ];
  return (
    <div className="mx-auto max-w-5xl space-y-7">
      <section>
        <div className="mono-font text-xs uppercase tracking-widest text-[#52d6c1]">
          Configurador inteligente
        </div>
        <h1 className="display-font mt-2 text-4xl font-bold text-white">
          Arma tu PC ideal
        </h1>
        <p className="mt-2 max-w-2xl text-slate-400">
          Cuéntanos para qué la usarás y recibe una configuración equilibrada,
          probada y lista para rendir.
        </p>
      </section>
      <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
        <Paper className="!rounded-lg !border !border-white/10 !bg-[#131b27] !p-5 md:!p-7">
          <div className="mb-7 flex gap-2">
            {["Uso", "Componentes", "Cotización"].map((item, index) => (
              <div
                key={item}
                className={`flex-1 border-b-2 pb-3 text-center text-xs font-bold uppercase tracking-wider ${step >= index ? "border-[#62a8ff] text-[#62a8ff]" : "border-white/10 text-slate-600"}`}
              >
                {index + 1}. {item}
              </div>
            ))}
          </div>
          {step === 0 && (
            <div className="space-y-4">
              <Typography className="!text-xl !font-bold !text-white">
                ¿Qué quieres hacer con tu equipo?
              </Typography>
              {[
                "Gaming competitivo y streaming",
                "Diseño, arquitectura y render 3D",
                "Productividad y oficina profesional",
              ].map((item) => (
                <button
                  onClick={() => setStep(1)}
                  key={item}
                  className="flex w-full items-center justify-between rounded border border-white/10 bg-[#0d141e] p-4 text-left text-slate-200 hover:border-blue-400/60"
                >
                  <span>{item}</span>
                  <ArrowForward className="!text-[#62a8ff]" />
                </button>
              ))}
            </div>
          )}
          {step === 1 && (
            <div className="space-y-4">
              <Typography className="!text-xl !font-bold !text-white">
                Selecciona tus prioridades
              </Typography>
              {[
                "Máximo FPS y baja latencia",
                "Silenciosa y compacta",
                "Escalable para el futuro",
              ].map((item) => (
                <FormControlLabel
                  key={item}
                  control={<Checkbox defaultChecked />}
                  label={item}
                  className="!block !text-slate-300"
                />
              ))}
              <Button
                variant="contained"
                onClick={() => setStep(2)}
                className="!mt-5"
              >
                Ver mi configuración
              </Button>
            </div>
          )}
          {step === 2 && (
            <div className="space-y-4">
              <Typography className="!text-xl !font-bold !text-white">
                Tu propuesta equilibrada
              </Typography>
              {parts.map(([label, name, price]) => (
                <div
                  key={label}
                  className="flex items-center justify-between border-b border-white/10 py-3"
                >
                  <div>
                    <div className="text-xs uppercase text-slate-500">
                      {label}
                    </div>
                    <div className="text-sm text-white">{name}</div>
                  </div>
                  <span className="mono-font text-sm text-[#52d6c1]">
                    {price}
                  </span>
                </div>
              ))}
              <Button
                variant="contained"
                onClick={() => setQuoteDialogOpen(true)}
                startIcon={<Send />}
                className="!mt-4"
              >
                Solicitar cotización
              </Button>
            </div>
          )}
        </Paper>
        <Paper className="!h-fit !rounded-lg !border !border-white/10 !bg-[#101824] !p-5">
          <div className="text-xs uppercase tracking-widest text-slate-500">
            Resumen estimado
          </div>
          <div className="mono-font mt-3 text-3xl font-bold text-white">
            Bs 12.880
          </div>
          <div className="mt-1 text-sm text-slate-400">
            Incluye armado, pruebas y garantía de 12 meses.
          </div>
          <Divider className="!my-5 !border-white/10" />
          <div className="flex items-center gap-2 text-sm text-[#52d6c1]">
            <CheckCircle fontSize="small" /> Compatibilidad validada
          </div>
          <div className="mt-3 flex items-center gap-2 text-sm text-[#52d6c1]">
            <CheckCircle fontSize="small" /> Despacho en 24-48h
          </div>
        </Paper>
      </div>
      <QuoteRequestDialog
        open={quoteDialogOpen}
        onClose={() => setQuoteDialogOpen(false)}
        parts={parts}
      />
    </div>
  );
}
function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <div className="space-y-8">
      <section>
        <div className="mono-font text-xs uppercase tracking-widest text-[#52d6c1]">
          Atención técnica y despachos
        </div>
        <h1 className="display-font mt-2 text-4xl font-bold text-white">
          Estamos en línea contigo.
        </h1>
        <p className="mt-2 max-w-2xl text-slate-400">
          Soporte para compras individuales, cotizaciones B2B e importaciones
          directas.
        </p>
      </section>
      <div className="grid gap-4 md:grid-cols-3">
        {[
          {
            icon: <WhatsApp />,
            title: "WhatsApp especializado",
            value: "+591 760 98211",
            color: "#52d6c1",
          },
          {
            icon: <Email />,
            title: "Cotizaciones B2B",
            value: "cotizaciones@haypuestec.bo",
            color: "#62a8ff",
          },
          {
            icon: <Phone />,
            title: "Central de despachos",
            value: "+591 (3) 344-9080",
            color: "#d8b4fe",
          },
        ].map((item) => (
          <Card
            key={item.title}
            className="!rounded-lg !border !border-white/10 !bg-[#131b27] !p-5"
          >
            <span style={{ color: item.color }}>{item.icon}</span>
            <h3 className="display-font mt-5 text-lg font-bold text-white">
              {item.title}
            </h3>
            <p className="mt-2 text-sm text-slate-400">{item.value}</p>
            <Button className="!mt-5 !px-0 !text-[#62a8ff]">
              Contactar <ArrowForward fontSize="small" />
            </Button>
          </Card>
        ))}
      </div>
      <div className="grid gap-6 lg:grid-cols-[1.1fr_.9fr]">
        <Paper className="!rounded-lg !border !border-white/10 !bg-[#131b27] !p-5 md:!p-7">
          <h2 className="display-font text-2xl font-bold text-white">
            Envíanos tu requerimiento
          </h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <TextField label="Nombre completo" />
            <TextField label="Correo electrónico" type="email" />
            <TextField label="Teléfono / WhatsApp" />
            <TextField label="Empresa (opcional)" />
          </div>
          <TextField
            label="¿En qué podemos ayudarte?"
            multiline
            rows={4}
            className="!mt-4 !w-full"
          />
          <Button
            variant="contained"
            onClick={() => setSent(true)}
            startIcon={<Send />}
            className="!mt-5"
          >
            Enviar consulta
          </Button>
        </Paper>
        <div className="space-y-4">
          <div className="rounded-lg border border-white/10 bg-[#131b27] p-5">
            <div className="flex items-center gap-2 text-[#52d6c1]">
              <LocationOn /> <span className="font-bold">Puntos de retiro</span>
            </div>
            {[
              "Santa Cruz · Equipetrol Norte",
              "La Paz · Sopocachi",
              "Cochabamba · Cala Cala",
            ].map((location) => (
              <div
                key={location}
                className="mt-4 flex items-center gap-3 text-sm text-slate-300"
              >
                <span className="h-2 w-2 rounded-full bg-[#52d6c1]" />
                {location}
              </div>
            ))}
          </div>
          <div className="rounded-lg border border-blue-400/20 bg-blue-500/10 p-5 text-sm leading-6 text-slate-300">
            <FlightTakeoff className="mr-2 align-middle !text-[#62a8ff]" />{" "}
            Importaciones directas con póliza aduanera y garantía escrita de 12
            meses.
          </div>
        </div>
      </div>
      <Snackbar
        open={sent}
        autoHideDuration={4000}
        onClose={() => setSent(false)}
      >
        <Alert severity="success" onClose={() => setSent(false)}>
          Tu consulta fue enviada correctamente.
        </Alert>
      </Snackbar>
    </div>
  );
}
function InfoPage({ type }) {
  const isSupplier = type === "suppliers";
  return (
    <div className="mx-auto max-w-5xl space-y-8">
      <div>
        <div className="mono-font text-xs uppercase tracking-widest text-[#52d6c1]">
          {isSupplier
            ? "Red de marcas oficiales"
            : "Soluciones para organizaciones"}
        </div>
        <h1 className="display-font mt-2 text-4xl font-bold text-white">
          {isSupplier
            ? "Tecnología con respaldo de origen."
            : "HayPuestec Enterprise."}
        </h1>
        <p className="mt-3 max-w-2xl text-slate-400">
          {isSupplier
            ? "Trabajamos con fabricantes reconocidos y canales autorizados para cuidar la procedencia de cada componente."
            : "Infraestructura, procurement y soporte técnico para equipos que no pueden detenerse."}
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {(isSupplier
          ? [
              "ASUS ROG",
              "Lenovo Legion",
              "AMD Ryzen",
              "NVIDIA GeForce",
              "Kingston Fury",
              "MSI",
            ]
          : [
              "Compras institucionales",
              "Servidores y workstations",
              "Soporte y garantías",
            ]
        ).map((item, index) => (
          <Card
            key={item}
            className="!rounded-lg !border !border-white/10 !bg-[#131b27] !p-5"
          >
            <div className="mono-font text-sm text-[#62a8ff]">0{index + 1}</div>
            <h3 className="display-font mt-8 text-xl font-bold text-white">
              {item}
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              {isSupplier
                ? "Canal oficial, trazabilidad de importación y garantía local."
                : "Atención prioritaria, factura fiscal y condiciones para equipos de alto volumen."}
            </p>
          </Card>
        ))}
      </div>
      <div className="rounded-lg border border-white/10 bg-[#131b27] p-6 md:p-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="text-sm font-bold text-white">
              ¿Necesitas una propuesta a medida?
            </div>
            <div className="mt-1 text-sm text-slate-400">
              Nuestro equipo puede ayudarte a definir la mejor arquitectura.
            </div>
          </div>
          <Button variant="contained" href="mailto:cotizaciones@haypuestec.bo">
            Solicitar propuesta
          </Button>
        </div>
      </div>
    </div>
  );
}
function App() {
  const [page, setPage] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [notice, setNotice] = useState(false);
  const addToCart = (product) => {
    setCart((current) => [...current, product]);
    setNotice(true);
  };
  const content =
    page === "home" ? (
      <HomePage setPage={setPage} onAdd={addToCart} />
    ) : page === "catalog" ? (
      <CatalogPage onAdd={addToCart} />
    ) : page === "builder" ? (
      <BuilderPage />
    ) : page === "contact" ? (
      <ContactPageSupabase />
    ) : (
      <InfoPage type={page} />
    );
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header
        page={page}
        setPage={setPage}
        cartCount={cart.length}
        onMenu={() => setMobileOpen(true)}
      />
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        PaperProps={{ className: "!w-72 !bg-[#101824] !p-4" }}
      >
        <div className="flex items-center justify-between">
          <span className="display-font text-lg font-bold text-white">
            Navegación
          </span>
          <IconButton
            onClick={() => setMobileOpen(false)}
            className="!text-slate-300"
          >
            <Close />
          </IconButton>
        </div>
        <div className="mt-6 space-y-2">
          {navItems.map((item) => (
            <Button
              key={item.key}
              fullWidth
              onClick={() => {
                setPage(item.key);
                setMobileOpen(false);
              }}
              startIcon={item.icon}
              className={`!justify-start !px-4 !py-3 ${page === item.key ? "!bg-blue-500/15 !text-[#8fc2ff]" : "!text-slate-300"}`}
            >
              {item.label}
            </Button>
          ))}
        </div>
      </Drawer>
      <main className="mx-auto min-h-[calc(100vh-64px)] w-full max-w-[1440px] px-4 py-7 md:px-8 md:py-10">
        {content}
      </main>
      <footer className="border-t border-white/10 bg-[#0a0f17] px-4 py-8 md:px-8">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-3 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <span>© 2024 HayPuestec · Hardware con respaldo.</span>
          <span className="flex items-center gap-2">
            <CheckCircle fontSize="small" className="!text-[#52d6c1]" /> Factura
            · Garantía · Despacho nacional
          </span>
        </div>
      </footer>
      <Snackbar
        open={notice}
        autoHideDuration={2500}
        onClose={() => setNotice(false)}
      >
        <Alert severity="success" onClose={() => setNotice(false)}>
          Producto añadido a tu cotización.
        </Alert>
      </Snackbar>
    </ThemeProvider>
  );
}
export default App;
