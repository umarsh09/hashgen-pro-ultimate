import React from 'react'
import { motion } from 'framer-motion'
import { clsx } from 'clsx'
import styles from './Button.module.css'

const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  className,
  as: Component = 'button',
  disabled = false,
  loading = false,
  ...props
}) => {
  const classes = clsx(
    styles.button,
    styles[variant],
    styles[size],
    {
      [styles.disabled]: disabled,
      [styles.loading]: loading
    },
    className
  )

  return (
    <motion.div whileHover={{ scale: disabled ? 1 : 1.02 }} whileTap={{ scale: disabled ? 1 : 0.98 }}>
      <Component className={classes} disabled={disabled} {...props}>
        {loading && <span className={styles.spinner}></span>}
        <span className={loading ? styles.hiddenText : ''}>{children}</span>
      </Component>
    </motion.div>
  )
}

export default Button
