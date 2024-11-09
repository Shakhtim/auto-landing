import expressAsyncHandler from 'express-async-handler';
import settingModel from '../../model/settingModel.js'; // Импортируйте модель, которую мы создали ранее
const createSiteInfo = expressAsyncHandler(async (req, res) => {
    const { phone, address, email, working_hours, website, social_media } = req.body;
    try {
        const newSiteInfo = await settingModel.create({
            phone,
            address,
            email,
            working_hours,
            website,
            social_media,
        });
        res.status(201).send({ message: 'Основная информация успешно создана!', siteInfo: newSiteInfo });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Ошибка при создании основной информации', error });
    }
});
export default createSiteInfo;
