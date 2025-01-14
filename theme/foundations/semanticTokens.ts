const semanticTokens = {
  colors: {
    divider: {
      'default': 'blackAlpha.200',
      _dark: 'whiteAlpha.200',
    },
    text: {
      'default': 'body.textPrimary',
      _dark: 'body.textPrimary',
    },
    text_secondary: {
      'default': 'body.textSecondary',
      _dark: 'body.textSecondary',
    },
    link: {
      'default': 'body.brand',
      _dark: 'body.brand',
    },
    link_hovered: {
      'default': 'body.brandHover',
    },
    icon_link_external: {
      'default': 'body.brand',
      _dark: 'body.brand',
    },
    icon_info: {
      'default': 'gray.400',
      _dark: 'gray.500',
    },
    error: {
      'default': 'red.500',
      _dark: 'red.500',
    },
    dialog_bg: {
      'default': 'white',
      _dark: 'gray.900',
    },
  },
  shadows: {
    action_bar: '0 4px 4px -4px rgb(0 0 0 / 10%), 0 2px 4px -4px rgb(0 0 0 / 6%)',
  },
};

export default semanticTokens;
