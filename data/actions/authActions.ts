"use server"
// Server action

export const registerUserAction = async (prevState:Object, formData: FormData) => {
    console.log("Hi from registerUserAction")

    const fields = {
        username: formData.get("username"),
        password: formData.get("password"),
        email: formData.get("email")
    }

    //console.log("formData fields",fields);

    return{
        ...prevState,
        data: fields
    }
}