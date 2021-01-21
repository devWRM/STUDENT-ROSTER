class WordsController < ApplicationController
  # before_action :set_word, only: [:show, :update, :destroy]
  before_action :set_student

  # GET /words
  def index
    # @words = Word.all
    # render json: @words

    # @words = @student.words
    @words = Word.all
    render json: @words

  end

  # GET /words/1
  def show
    @word = Word.find(params[:id])
    render json: @word
  end

  # POST /words
  def create

    @word = @student.words.new(word_params)

    if @word.save
      # render json: @word, status: :created, location: @word
      render json: @student
    else
      render json: @word.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /words/1
  def update
    @word = Word.find(params[:id])
    if @word.update(word_params)
      render json: @word
    else
      render json: @word.errors, status: :unprocessable_entity
    end
  end

  # DELETE /words/1
  def destroy
    @word = Word.find(params[:id])
    @word.destroy

    render json: @student
  end

  # DELETE /words
  def delete
    Word.destroy_all
  end

  private
    # Note  http://localhost:3000/students/1/words
    def set_student
      @student = Student.find(params[:student_id])
    end

    # # Use callbacks to share common setup or constraints between actions.
    # def set_word
    #   @word = Word.find(params[:id])
    # end

    # Only allow a trusted parameter "white list" through.
    def word_params
      params.require(:word).permit(:spelling, :pos, :definition, :sentence, :student_id)
    end
end
