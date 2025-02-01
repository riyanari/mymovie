import { forwardRef, useEffect, useRef } from "react";
import PropTypes from "prop-types";

const TextInput = forwardRef(
    function TextInput(
        {
            type = "text",
            name,
            value,
            // defaultValue = "",
            className = "",
            variant = "primary",
            autoComplete,
            required = false,
            isFocused = false,
            handleChange,
            placeholder,
            isError = false,
            ...props
        },
        ref
    ) {
        const inputRef = ref || useRef();

        useEffect(() => {
            if (isFocused && inputRef.current) {
                inputRef.current.focus();
            }
        }, [isFocused]);

        return (
            <div className="flex flex-col items-start">
                <input
                    {...props}
                    type={type}
                    name={name}
                    value={value}
                    // defaultValue={defaultValue}
                    className={`rounded-2xl bg-form-bg py-[13px] px-7 w-full input-${variant} ${isError ? "input-error" : ""} ${className}`}
                    ref={inputRef}
                    autoComplete={autoComplete}
                    required={required}
                    onChange={(e) => handleChange && handleChange(e)}
                    placeholder={placeholder}
                />
            </div>
        );
    }
);

TextInput.propTypes = {
    type: PropTypes.oneOf(["text", "email", "password", "number", "file"]),
    name: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    // defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    className: PropTypes.string,
    variant: PropTypes.oneOf(["primary", "error", "primary-outline"]),
    autoComplete: PropTypes.string,
    required: PropTypes.bool,
    isFocused: PropTypes.bool,
    handleChange: PropTypes.func,
    placeholder: PropTypes.string,
    isError: PropTypes.bool,
};

TextInput.defaultProps = {
    type: "text",
    className: "",
    variant: "primary",
    isFocused: false,
    isError: false,
    required: false,
};

export default TextInput;
