import { SubmitHandler, useForm } from 'react-hook-form';

import {
  ErrorMsg,
  Form,
  FormArea,
  Input,
  Label,
  Select,
  Submit,
  Textarea,
  Wrapper,
} from './style';

export interface ContactInput {
  requirements: string;
  name: string;
  companyName: string;
  email: string;
  message: string;
}

export const selectOptions = [
  {
    value: 'production',
    text: '制作のご依頼について',
    default: true,
  },
  {
    value: 'other',
    text: 'その他',
    default: false,
  },
];

const ProfileTemplate: React.VFC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit: SubmitHandler<ContactInput> = (data) => {
    if (!confirm('入力された内容でメールを送信しますか？')) {
      return;
    }
    fetch('/api/sendMail', {
      method: 'POST',
      mode: 'cors',
      credentials: 'same-origin',
      body: JSON.stringify(data),
    })
      .then((res) => {
        reset();
        console.log(res, 'res');
        alert('メールを送信しました。');
      })
      .catch((_) => {
        alert(
          '予期せぬエラーが発生しました。お手数ですが時間をおいて再度送信ください。',
        );
      });
  };

  return (
    <Wrapper>
      <h1>CONTACT</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormArea>
          <Label htmlFor='requirements'>要件</Label>
          <Select
            id='requirements'
            defaultValue='production'
            {...register('requirements')}
          >
            {selectOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.text}
              </option>
            ))}
          </Select>
        </FormArea>
        <FormArea>
          <Label htmlFor='name' required>
            氏名
          </Label>
          <Input
            id='name'
            type='text'
            {...register('name', { required: true })}
          />
          {errors.name && <ErrorMsg>氏名を入力してください</ErrorMsg>}
        </FormArea>
        <FormArea>
          <Label htmlFor='companyName'>会社名</Label>
          <Input id='companyName' type='text' {...register('companyName')} />
        </FormArea>
        <FormArea>
          <Label htmlFor='email' required>
            メールアドレス
          </Label>
          <Input
            id='email'
            type='email'
            {...register('email', {
              required: true,
            })}
          />
          {errors.email && (
            <ErrorMsg>メールアドレスを入力してください</ErrorMsg>
          )}
        </FormArea>
        <FormArea>
          <Label htmlFor='message' required>
            メッセージ
          </Label>
          <Textarea id='message' {...register('message', { required: true })} />
          {errors.message && <ErrorMsg>メッセージを入力してください</ErrorMsg>}
        </FormArea>

        <Submit type='submit'>送信する</Submit>
      </Form>
    </Wrapper>
  );
};

export default ProfileTemplate;
