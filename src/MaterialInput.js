import { TextField } from "@mui/material";

export default function MaterialInput({
  value,
  onChange,
  label,
  disableUnderline,
  fontSize,
  multiline,
  maxRows,
  onEnter,
  fontWeight,
  rows,
  type,
  autoFocus = false,
  onlyYear,
  variant = "filled",
  placeholder,
}) {
  if (!fontSize) fontSize = "var(--fontSize1)";

  variant = "filled";

  return (
    <TextField
      autoFocus={autoFocus}
      type={type}
      //   InputLabelProps={{ style: { fontSize: fontSize, opacity: "0.8" } }}
      //   InputProps={{
      //     disableUnderline: disableUnderline ? true : false,

      //     style: {
      //       fontSize: fontSize,
      //       fontWeight: fontWeight,
      //       borderRadius: "var(--borderRadius1)",
      //       color: "#ffffff",
      //       backgroundColor: "var(--translucentInteraction)",
      //       border: "1px solid var(--translucentHard)",
      //       overflow: "hidden",
      //     },
      //   }}
      //   sx={{ input: { color: "#ffffff" } }}
      fullWidth
      multiline={multiline}
      maxRows={maxRows}
      placeholder={placeholder}
      onKeyDown={(ev) => {
        console.log(`Pressed keyCode ${ev.key}`);
        if (ev.key === "Enter") {
          if (onEnter) {
            onEnter(ev);
          }
          // Do code here
          ev.preventDefault();
        }
      }}
      rows={rows}
      value={value}
      onChange={onChange}
      label={label}
      variant={variant}
    />
  );
}
