import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "./ui/input";
import * as z from 'zod';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useHabitStore } from "@/zustandStores/HabitStore"
import { Button } from "./ui/button";
import { Ban, Check } from "lucide-react";
import { useEffect } from "react";

interface Props {
  habit: Habit;
}

export function ChangeHabitNameField({ habit }: Props) {

  const { name, id } = habit

  const [updateHabit] = useHabitStore((state) => [
    state.updateHabit
  ])

  const formSchema = z.object({
    name: z.string().min(2).max(18)
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name
    }
  })

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const updatedHabit = {...habit, name: values.name, editable: false}
    updateHabit(updatedHabit)
  }

  const handleClose = () => {
    const updatedHabit = {...habit, editable: false}
    updateHabit(updatedHabit)
  }

  useEffect(() => {
    const input = document.getElementById(id) as HTMLInputElement
    if (input) {
      input.focus()
      input.select()
    }
  }, [])

  return (
    <Form {...form}>
      <form  onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex items-center">
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input id={id} placeholder="Enter habit name..." {...field} className="text-base px-2 placeholder:text-xs md:placeholder:text-base"/>
                </FormControl>
              </FormItem>
            )}
          />
          <Button className='px-2' type='submit' variant='ghost'>
            <Check />
          </Button>
          <Button className='px-2' onClick={handleClose} variant='ghost'>
            <Ban color='red'/>
          </Button>
        </div>
      </form>
    </Form>
  )
}