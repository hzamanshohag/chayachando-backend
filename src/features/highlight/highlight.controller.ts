import { Request, Response } from 'express';
import { highlightService } from './highlight.service';

const createHighlight = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const result = await highlightService.createHighlightDB(payload);

    res.json({
      status: true,
      message: 'Highlight created successfully',
      data: result,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Something went wrong',
      error: error,
    });
  }
};

const getAllHighlight = async (req: Request, res: Response) => {
  try {
    const result = await highlightService.getALlHighlightDB();

    res.json({
      status: true,
      message: 'Highlights are retrieved successfully',
      data: result,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Something went wrong',
      error: error,
    });
  }
};

const getSingleHighlight = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const result = await highlightService.getSingleHighlightDB(id);

    res.json({
      status: true,
      message: 'Single highlight is retrieve successfully',
      data: result,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Something went wrong',
      error: error,
    });
  }
};

const updateHighlight = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const payload = req.body;

    const result = await highlightService.updateHighlightDB(id, payload);

    res.json({
      status: true,
      message: 'Highlight is update successfully',
      data: result,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Something went wrong',
      error: error,
    });
  }
};

const deleteHighlight = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const result = await highlightService.deleteHighlightDB(id);

    res.json({
      status: true,
      message: 'Highlight is delete successfully',
      data: {},
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Something went wrong',
      error: error,
    });
  }
};

export const highlightController = {
  createHighlight,
  getAllHighlight,
  getSingleHighlight,
  updateHighlight,
  deleteHighlight,
};
