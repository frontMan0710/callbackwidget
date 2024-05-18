export const widgetInit = ({organizationId, language}) => {
    document.body.innerHTML +=
        `<div>
            it's me
        </div>`;
    const userChange = {
        organizationId: organizationId,
        language: language,
    }
    console.log(userChange)
}