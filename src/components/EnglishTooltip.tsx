
interface EnglishTooltipProps {
  english: string;
  portuguese: string;
  children: React.ReactNode;
}

export const EnglishTooltip = ({ english, portuguese, children }: EnglishTooltipProps) => {
  return (
    <span className="tooltip-container">
      {children}
      <span className="tooltip-text">
        <strong>{english}</strong>: {portuguese}
      </span>
    </span>
  );
};
