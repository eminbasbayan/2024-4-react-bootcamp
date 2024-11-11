import * as yup from 'yup';

const passwordRules = {
  min: 10,
  minMessage: 'Şifre en az 6 karakter olmalıdır!',
  required: 'Şifre alanı zorunludur!',
};

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email('Geçerli bir email adresi giriniz!')
    .required('Email alanı zorunludur!'),
  password: yup
    .string()
    .min(passwordRules.min, passwordRules.minMessage)
    .required(passwordRules.required),
  rememberMe: yup.boolean(),
});

export const registerSchema = yup.object().shape({
  fullName: yup
    .string()
    .required('Ad Soyad alanı zorunludur!')
    .min(3, 'Ad Soyad en az 3 karakter olmalıdır!'),
  email: yup
    .string()
    .email('Geçerli bir email adresi giriniz!')
    .required('Email alanı zorunludur!'),
  password: yup
    .string()
    .min(passwordRules.min, passwordRules.minMessage)
    .required(passwordRules.required),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Şifreler eşleşmiyor!')
    .required('Şifre tekrarı zorunludur!'),
});
