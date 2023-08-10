import { Image } from 'native-base'
import LogoImage from '../assets/logo.png';

export function ImageLogoComponent({...otherProps}) {
  return (
    <Image
      source={LogoImage}
      alt="Logo"
      margin={10}
      {...otherProps}
    />
  )
}