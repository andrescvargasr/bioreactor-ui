import ValueCard from './ValueCard';

const GeneralTab = ({ data }) => {
  return (
    <div className="flex flex-col">
      {data?.epoch && (
        <p className="m-2 text-base font-medium text-black self-end">
          Awake time:
          <span className="mx-1 text-sm text-neutral-500">
            {data?.epoch / 1000 + 's'}
          </span>
        </p>
      )}
      <div className=" flex flex-row justify-around flex-wrap">
        {data?.parametersArray?.map((param, index) => (
          <ValueCard
            key={index}
            title={param.name || param.label}
            value={param.value * param.factor}
            unit={param.unit}
            className="w-full sm:w-1/2  md:w-1/3 lg:w-1/4 flex"
          />
        ))}
      </div>
    </div>
  );
};

export default GeneralTab;
