import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"
import { version } from "../../package.json"
import { i18n } from "../i18n"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  const Footer: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
    const year = new Date().getFullYear()
    const links = opts?.links ?? []
    return (
      <footer class={`${displayClass ?? ""}`}>
        <hr />
        <div style={{ textAlign: "center", margin: "2rem 0", lineHeight: "1.6" }}>
          <p style={{ fontSize: "0.9rem", fontWeight: "bold", margin: "0" }}>
            © {year} Roberto Alejandro Lopez. Todos los derechos reservados.
          </p>
          <p style={{ fontSize: "0.85rem", color: "var(--gray)", margin: "0.5rem 0" }}>
            <b>El Quijote Cuántico™</b> y <b>Cee-Elitebykris™</b> son marcas comerciales en proceso de registro.
          </p>
          <p style={{ fontSize: "0.8rem", fontStyle: "italic", color: "var(--secondary)" }}>
            Innovación con Propósito • Sabiduría Védica • Tecnología para la Consciencia
          </p>
        </div>

        <p>
          {i18n(cfg.locale).components.footer.createdWith}{" "}
          <a href="https://quartz.jzhao.xyz/">Quartz v{version}</a> © {year}
        </p>
        
        <ul>
          {Object.entries(links).map(([text, link]) => (
            <li>
              <a href={link}>{text}</a>
            </li>
          ))}
        </ul>
      </footer>
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor
