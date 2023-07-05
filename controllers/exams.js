const Exam = require("../models/Exam");

//全てのタスク
const getAllExams = async (req, res) => {
  try {
    const allExam = await Exam.find({});
    res.status(200).json(allExam);
  } catch (err) {
    res.status(500).json(err);
  }
};

//タスク新規作成
const createExam = async(req, res) => {
    try {
    const createExam = await Exam.create(req.body);
        res.status(200).json(createExam);
    } catch (err) {
        res.status(500).json(err);
    }
};

//特定タスクの呼び出し
const getSingleExam = async (req, res) => {
  try {
    const id = req.params.id;
    const singleTask = await Task.findOne({ _id: id }).exec();
    res.status(200).json(singleTask);
  } catch (err) {
    res.status(500).json(err);
  }
};

//タスク編集
const updateExam = async (req, res) => {
  try {
    const id = req.params.id;
    const update = req.body; // 更新するデータをリクエストボディから取得
    const options = { new: true }; // 更新後のタスクを取得するためのオプション

    const updatedExam = await Exam.findOneAndUpdate(
      { _id: id },
      update,
      options
    ).exec();

    if (updatedExam) {
      res.status(200).json(updatedExam);
    } else {
      res.status(404).json({ message: "存在しません" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

//タスク削除
const deleteExam = async (req, res) => {
  try {
    const id = req.params.id;

    const deletedExam = await Task.findOneAndDelete({ _id: id }).exec();

    if (deletedExam) {
      res.status(200).json({ message: "正常に削除できました" });
    } else {
      res.status(404).json({ message: "このタスクがありません" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  getAllExams,
  createExam,
  getSingleExam,
  updateExam,
  deleteExam
};