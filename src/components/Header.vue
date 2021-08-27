<template>
  <header>
    <div class="__left">
      <span class="__logo"></span>
      <nav>
        <ul class="__list">
          <li class="__item">
            <router-link to="/create" exact>
              <Typography variant="navigation">Criar Quiz</Typography>
            </router-link>
          </li>
          <li class="__item">
            <router-link to="/search">
              <Typography variant="navigation">Pesquisar</Typography>
            </router-link>
          </li>
          <li class="__item">
            <router-link to="/my-quizzes">
              <Typography variant="navigation">Meus Quizzes</Typography>
            </router-link>
          </li>
        </ul>
      </nav>
    </div>

    <div class="__right">
      <router-link to="/entrar">
        <Button small>
          Entrar
          <template v-slot:icon-right><SignInIcon /></template>
        </Button>
      </router-link>

      <router-link to="/criar-conta">
        <Button small primary>
          Criar Conta
          <template v-slot:icon-right><UserPlusIcon /></template>
        </Button>
      </router-link>
    </div>
  </header>
</template>

<script>
import Typography from "../shared/components/Typography.vue";
import Button from "./Button.vue";
import UserPlusIcon from "../assets/images/icons/user-plus-icon.svg";
import SignInIcon from "../assets/images/icons/login-icon.svg";

export default {
  components: {
    Button,
    Typography,
    UserPlusIcon,
    SignInIcon,
  },
};
</script>

<style lang="scss" scoped>
header {
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 10rem;

  background: var(--clr-default);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  &,
  .__list,
  .__right,
  .__left {
    display: flex;
  }

  .__left {
    gap: 4rem;

    .__logo {
      display: inline-block;
      width: 10rem;
      height: 2.5rem;

      background: var(--clr-primary-lighter);
      border-radius: 0.5rem;
      transition: all 0.2s;
      cursor: pointer;

      &:hover {
        background: var(--clr-primary-light);
      }
    }

    nav {
      align-self: stretch;

      .__list,
      .__item,
      .__item a {
        height: 100%;
      }

      .__list {
        list-style: none;
        gap: 1rem;

        .__item {
          a {
            display: flex;
            align-items: center;
            padding: 0 0.75rem;
            border-radius: 0.5rem;
            border-bottom: 3px solid transparent;

            transition: all 0.2s;
          }

          & a:not(.router-link-active) {
            &:hover {
              p {
                color: var(--clr-primary-light);
              }
            }
          }

          .router-link-active {
            position: relative;

            border-color: var(--clr-primary-light);

            p {
              color: var(--clr-primary);
            }
          }
        }
      }
    }
  }

  .__right {
    gap: 1.5rem;
  }
}
</style>
