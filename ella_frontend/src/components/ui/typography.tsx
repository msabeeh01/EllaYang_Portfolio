import './typography.css'

interface TextProps {
    variant: 'display' | 'section-heading' | 'brand-display' | 
             'body-large' | 'body' | 'caption' | 'label' | 'metadata' 
    children: React.ReactNode
    as?: 'h1' | 'h2' | 'h3' | 'p' | 'span' | 'div'
    className?: string
}

export const Text = ({variant, children, className = '', as = 'p'}: TextProps) => {
    const Component = as;
    return (
        <Component className={`text-${variant} ${className}`}>
            {children}
        </Component>
    )
}
