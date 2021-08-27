<template>
  <div class="container">
    <div class="__form-container">
      <Form>
        <template v-slot:header>
          <Typography variant="title" align="center"
            >Acesse sua conta</Typography
          >
        </template>

        <div class="__input-group">
          <Input
            placeholder="Digite seu email"
            v-model="email"
            :error="errors.email"
            @keyup.enter="handleSubmit"
          />
          <Input
            placeholder="Digite sua senha"
            type="password"
            v-model="password"
            :error="errors.password"
            @keyup.enter="handleSubmit"
          />

          <Typography class="__forgot" variant="complement" align="right">
            <router-link to="/">Esqueci minha senha.</router-link>
          </Typography>
        </div>

        <template v-slot:footer>
          <Button @click.prevent="handleSubmit" :loading="loading" primary>
            Entrar
            <template v-slot:icon-right><LoginIcon /></template>
          </Button>
        </template>
      </Form>
    </div>
    <div class="__illustration-container">
      <IllustrationSVG />
    </div>
  </div>
</template>

<script>
import Form from "@/components/Form.vue";
import Input from "@/components/Input.vue";
import Typography from "@/shared/components/Typography.vue";
import Button from "../../components/Button.vue";
import LoginIcon from "@/assets/images/icons/login-icon.svg";
import IllustrationSVG from "@/assets/images/illustration.svg";
import * as Yup from "yup";
import { getValidationErrors } from "@/utils/getValidationErrors.js";
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    Form,
    Input,
    Typography,
    Button,
    LoginIcon,
    IllustrationSVG,
  },
  data() {
    return {
      email: "",
      password: "",
      errors: {},
    };
  },

  computed: {
    ...mapGetters(["loading"]),
  },

  methods: {
    ...mapActions("auth", ["login"]),
    ...mapActions(["setLoading"]),
    async handleSubmit() {
      this.errors = {};
      this.setLoading(true);

      try {
        const schema = Yup.object({
          email: Yup.string()
            .required("Email obrigatório!")
            .email("Digite um email válido!"),
          password: Yup.string().required("Senha obrigatória!"),
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

        await this.login({ email, password });
      } catch (error) {
        // Api response time simulation
        if (error instanceof Yup.ValidationError) {
          this.errors = getValidationErrors(error);
          return;
        }

        this.errors = {
          email: "Autenticação indisponível no momento!",
          password: "Autenticação indisponível no momento!",
        };
      } finally {
        this.setLoading(false);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  flex: 1;
  display: flex;
  max-width: 90rem;
  align-self: center;

  .__form-container {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: stretch;

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
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 42rem;
    }
  }
}
</style>
