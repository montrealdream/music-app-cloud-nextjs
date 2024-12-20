export const FormInput = (props: {type: string, placeholder?: string} ) => {
    const { type, placeholder } = props;

    return (
        <>
            <div  className="flex flex-col gap-y-[5px] w-full rounded-[6px] truncate mb-[15px]">
                  <label htmlFor="" className="text-[14px] font-[600] dark:text-darkModeText capitalize">
                    {type}  <span className="text-red-600">*</span>
                  </label>
                  <input 
                    type={type}
                    placeholder={placeholder}
                    className="w-full outline-none p-[14px] rounded-[6px]"
                  />
            </div>
        </>
    );
}