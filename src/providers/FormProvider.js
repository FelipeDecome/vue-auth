export default {
  data() {
    return {
      errors: {},
      fields: {},
    };
  },

  methods: {
    setErrors(errors) {
      this.errors = errors;
    },

    registerField({ ref, name, errorPath }) {
      this.fields[name] = {
        ref,
        errorPath,
      };
    },

    setFieldError(name, error) {
      const { ref, errorPath } = this.fields[name];

      if (typeof ref[errorPath] === "function") {
        ref[errorPath](error);
      } else {
        ref[errorPath] = error;
      }
    },
  },

  watch: {
    errors(value, oldValue) {
      if (JSON.stringify(value) === JSON.stringify(oldValue)) return;

      if (Object.keys(value).length <= 0) {
        Object.keys(this.fields).forEach((field) =>
          this.setFieldError(field, "")
        );
      }

      Object.entries(value).forEach(([field, error]) =>
        this.setFieldError(field, error)
      );
    },
  },

  provide() {
    return {
      setErrors: this.setErrors,
      registerField: this.registerField,
    };
  },
};
