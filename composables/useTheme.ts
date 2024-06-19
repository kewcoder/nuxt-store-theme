export const useTheme = () => {
    return useState('theme', () => {
      return {
        name: '',
        store_design: {
          general: {},
          sections: {}
        }
      } as any
    })
  }