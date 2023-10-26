import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"


export const ReusableForm = ({ form, name, label, disable, placeholder, className }: {
  form: any
  name?: string
  label?: string
  placeholder?: string
  className?: string
  disable?: boolean
}) => {
  return (
    <FormField
      control={form.control}
      name={name!}
      render={({ field }) => (
        <FormItem>
          <FormLabel dangerouslySetInnerHTML={{ __html: label || '&nbsp;' }}></FormLabel>
          <FormControl>
            <Input disabled={disable} className={className} placeholder={placeholder} {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
