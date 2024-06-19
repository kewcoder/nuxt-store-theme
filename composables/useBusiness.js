export const useBusiness = () => {
    return useState('business', () => {
      return {
        id: ''
      } 
    })
  }