import { FormControl, IInputProps, ITextProps, Input } from "native-base";

interface InputProps extends ITextProps {
  labelText: string
  placeholderText: string
  secureTextEntry?: boolean
  value?: string
  onChangeText?: (text: string) => void
}

export function InputComponent({
  labelText,
  placeholderText,
  secureTextEntry = false,
  value,
  onChangeText,
  ...otherProps
}: InputProps) : JSX.Element {
  return (
    <FormControl>
      <FormControl.Label {...otherProps}>
        {labelText}
      </FormControl.Label>
      <Input
        placeholder={placeholderText}
        size='lg'
        width="100%"
        borderRadius='lg'
        backgroundColor='gray.100'
        shadow={3}
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={onChangeText}
      />
    </FormControl>
  )
}