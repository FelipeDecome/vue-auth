<template>
  <div class="container">
    <div class="__form-container">
      <Form>
        <template v-slot:header>
          <Typography variant="title">Acesse sua conta</Typography>
        </template>

        <div class="__input-group">
          <Input
            placeholder="Digite seu email"
            v-model="email"
            :error="errors.email"
          />
          <Input
            placeholder="Digite sua senha"
            type="password"
            v-model="password"
            :error="errors.password"
          />

          <Typography class="__forgot" variant="complement" align="right">
            <router-link to="/">Esqueci minha senha.</router-link>
          </Typography>
        </div>

        <template v-slot:footer>
          <Button @click.prevent="handleSubmit" :loading="loading">
            Entrar
            <template v-slot:icon-right><LoginIcon /></template>
          </Button>
        </template>
      </Form>
    </div>
    <div class="__illustration-container">
      <img src="@/assets/images/illustration.png" alt="illustration" />
    </div>
  </div>
</template>

<script>
import Form from "@/components/Form.vue";
import Input from "@/components/Input.vue";
import Typography from "@/shared/components/Typography.vue";
import Button from "@/components/Button.vue";
import LoginIcon from "@/assets/images/icons/login-icon.svg";
import * as Yup from "yup";
import { getValidationErrors } from "@/utils/getValidationErrors.js";

export default {
  components: {
    Form,
    Input,
    Typography,
    Button,
    LoginIcon,
  },
  data() {
    return {
      email: "",
      password: "",
      errors: {},
      loading: false,
    };
  },

  methods: {
    async handleSubmit() {
      this.errors = {};
      this.loading = true;

      try {
        const schema = Yup.object({
          email: Yup.string()
            .required("Email obrigatório!")
            .email("Digite um email válido!"),
          password: Yup.string()
            .min(8, "A senha deve conter no mínimo 8 caracteres.")
            .max(24, "A senha deve conter no máximo 24 caracteres.")
            .required("Senha obrigatória!"),
        });

        const { email, password } = this;

        await schema.validate(
          {
            email,
            password,
          },
          {
            abortEarly: false,
          }
        );

        this.loading = false;
      } catch (error) {
        setTimeout(() => {
          // Api response time simulation
          if (error instanceof Yup.ValidationError)
            this.errors = getValidationErrors(error);

          this.loading = false;
        }, 500);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  height: 100%;

  .__form-container {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 0 10rem;

    .__input-group {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      .__forgot {
        color: var(--clr-text-default);
        &:hover {
          color: var(--clr-primary-light);
        }
      }
    }
  }

  .__illustration-container {
    height: 100%;
  }
}
</style>
