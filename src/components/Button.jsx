function Button({ children, href, variant = 'primary', ...props }) {
  const styles = variant === 'primary' ? 'bg-[var(--lime)] text-[var(--ink)] hover:bg-white' : 'border border-[var(--line)] text-white hover:border-[var(--lime)] hover:text-[var(--lime)]'
  if (href) return <a className={`button ${styles}`} href={href} {...props}>{children}</a>
  return <button className={`button ${styles}`} type="button" {...props}>{children}</button>
}

export default Button